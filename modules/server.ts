import express, { Application } from "express";
import http from "http";
import cors from 'cors';
import { products } from "../routes/index.js";


type paths = {
    products: string
}

class Server {
    private static instance: Server;
    private app: Application;
    private port: string;
    private server: null | http.Server;
    private apiPaths: paths = {
        products: '/api/products'
    };


    private constructor() {
        Server.instance = this;

        this.app = express();
        this.port = process.env.PORT || '9000';
        this.server = null;
        this.middleware();
        this.routes();
    }

    public static getInstance(): Server {
        if (!this.instance) this.instance = new Server();
        return this.instance;
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.apiPaths.products, products);
    }

    start() {
        this.server = this.app.listen(this.port, () => console.log('Servidor corriendo en el puerto', this.port));
    }

    close() {
        this.server?.close();
    }
}

export default Server;