const { Schema, model } = require('mongoose');

const MuestraSchema = Schema({
    fecha: {
        type: Date,
        default: Date.now()
    },
    ayunas: {
        type: Number,
    },
    despues_ayunas: {
        type: Number,
    },
    antes_almuerzo: {
        type: Number,
    },
    despues_almuerzo: {
        type: Number,
    },
    antes_comida: {
        type: Number,
    },
    despues_comida: {
        type: Number,
    },
    tres_am: {
        type: Number,
    }
});

module.exports = model('Muestra', MuestraSchema);