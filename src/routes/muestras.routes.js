const { Router } = require('express');
const {
    getMuestras,
    postMuestras,
    putMuestra,
    deleteMuestra,
    getMuestrasById
} = require('../controller/muestra.controller');

const router = Router();

router.get('/', getMuestras);
router.get('/:id', getMuestrasById);
router.post('/', postMuestras);
router.put('/:id', putMuestra);
router.delete('/:id', deleteMuestra);

module.exports = router;