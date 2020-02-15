const express = require('express');
export default class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express();
    }
}
