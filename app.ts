import * as dotenv from 'dotenv';
import Server from './modules/server.js';
dotenv.config();

const server = new Server();
server.start();