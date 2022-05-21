const { response } = require('express');
const Muestra = require('../model/Muestra.model');

const getMuestras = async(req, res = response) => {
    try {
        await Muestra.find({}).sort({ fecha: -1 }).exec((err, m) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    msn: 'Error Al esncontrar las muestras'
                });
            }
            return res.status(200).json({
                ok: true,
                msn: 'Listado De Muestras',
                muestras: m
            })
        })
    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

const getMuestrasById = async(req, res = response) => {
    try {
        const id = req.params.id;
        await Muestra.findById({ _id: id })
            .exec((err, m) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        msn: 'Error Al encontrar la muestra'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    msn: 'Muestras',
                    muestra: m
                })
            })
    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }
}

const postMuestras = async(req, res = response) => {
    try {
        const { fecha, ayunas, despues_ayunas, antes_almuerzo, despues_almuerzo, antes_comida, despues_comida, tres_am } = req.body;
        /**
         * Creación del modelo para su creación
         */
        const muestra = new Muestra({ fecha, ayunas, despues_ayunas, antes_almuerzo, despues_almuerzo, antes_comida, despues_comida, tres_am });

        await muestra.save((err, m) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    msn: 'Error al crear la muestra'
                });
            }
            return res.status(200).json({
                ok: true,
                msn: 'Muestra Creada',
                muestra: m
            })
        });

    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }

}

const putMuestra = async(req, res = response) => {
    try {
        const id = req.params.id;
        const { fecha, ayunas, despues_ayunas, antes_almuerzo, despues_almuerzo, antes_comida, despues_comida, tres_am } = req.body;

        await Muestra.findById({ _id: id }).exec((err, resp) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    msn: 'Error al actualizar la muestra'
                });
            }
            if (resp.length === 0) {
                return res.status(400).json({
                    ok: false,
                    msn: 'No existe la muestra'
                });
            }
            resp.ayunas = ayunas;
            resp.despues_ayunas = despues_ayunas;
            resp.antes_almuerzo = antes_almuerzo;
            resp.despues_almuerzo = despues_almuerzo;
            resp.antes_comida = antes_comida;
            resp.despues_comida = despues_comida;
            resp.tres_am = tres_am;
            resp.fecha = fecha;
            resp.save((err, m) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        msn: 'Error al actualizar la muestra'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    msn: 'Muestra Actualizada',
                    muestra: m
                })
            });
        })

    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }
}

const deleteMuestra = async(req, res = response) => {
    try {
        const id = req.params.id;
        await Muestra.findByIdAndDelete({ _id: id })
            .exec((err, muestra) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        msn: 'Error al eliminar la Muestra'
                    });
                }
                return res.status(200).json({
                    ok: true,
                    msn: 'Muestra Eliminada'
                })
            });

    } catch (error) {
        throw new Error(`Error en el formato: ${error}`);
    }
}

module.exports = {
    getMuestras,
    postMuestras,
    putMuestra,
    deleteMuestra,
    getMuestrasById
};