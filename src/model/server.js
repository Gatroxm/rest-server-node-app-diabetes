const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config.db');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.muestrasRouter = '/api/muestras/';

        //Base De Datos
        this.conectarDB();

        //midelwares
        this.midelwares();
        //Rutas
        this.routes();
    }

    async conectarDB() {
        await dbConection();
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
        // this.app.use(this.usersRouter, require('../routes/user.routes'));
        // this.app.use(this.periodosRouter, require('../routes/periodo.routes'));
        this.app.use(this.muestrasRouter, require('../routes/muestras.routes'));
    }
    listen() {
        this.app.listen(this.port, (req, res) => {
            console.log(`listening on port ${this.port}`);
        });
    }

}

module.exports = Server;