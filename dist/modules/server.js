import express from "express";
class Server {
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
//# sourceMappingURL=server.js.map