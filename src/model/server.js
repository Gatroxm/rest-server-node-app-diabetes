const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRouter = '/api/users/';
        //midelwares
        this.midelwares();
        //Rutas
        this.routes();
    }

    midelwares() {
        // cors
        this.app.use(cors());

        //Lectura y parcedo del body
        this.app.use(express.json());

        // Dirección publica
        this.app.use(express.static('public'))
    }
    routes() {
        this.app.use(this.usersRouter, require('../routes/user.routes'));
    }
    listen() {
        this.app.listen(this.port, (req, res) => {
            console.log(`listening on port ${this.port}`);
        });
    }

}

module.exports = Server;