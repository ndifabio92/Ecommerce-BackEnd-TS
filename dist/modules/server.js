import express from "express";
import cors from 'cors';
import { products } from "../routes/index.js";
class Server {
    constructor() {
        this.apiPaths = {
            products: '/api/products'
        };
        Server.instance = this;
        this.app = express();
        this.port = process.env.PORT || '9000';
        this.server = null;
        this.middleware();
        this.routes();
    }
    static getInstance() {
        if (!this.instance)
            this.instance = new Server();
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
//# sourceMappingURL=server.js.map