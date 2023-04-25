import dotenv from 'dotenv';
import Server from './modules/server.js';
dotenv.config();
const server = Server.getInstance();
server.start();
//# sourceMappingURL=app.js.map