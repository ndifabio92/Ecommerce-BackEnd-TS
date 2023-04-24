import express, { Application } from "express";
import http from "http";

class Server {

    private app: Application;
    private port: Number;
    private server: null | http.Server;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 9000;
        this.server = null;
    }

    start() {
        this.server = this.app.listen(this.port, () => console.log('Servidor corriendo en el puerto', this.port));
    }

    close() {
        this.server?.close();
    }
}

export default Server;