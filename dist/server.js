"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express();
        app.get('/', function (req, res) {
            res.send("Salut les gens");
        });
        app.listen(this.port, function () {
            console.log("Server démarré");
        });
    }
}
exports.default = Server;
