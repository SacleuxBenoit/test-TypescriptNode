"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express_1.default();
        app.get('/', function (req, res) {
            res.send("Salut les gens");
        });
        app.listen(this.port, function () {
            console.log("Server démarré");
        });
    }
}
exports.default = Server;
