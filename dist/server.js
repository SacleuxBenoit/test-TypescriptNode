const express = require('express');
export default class Server {
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
