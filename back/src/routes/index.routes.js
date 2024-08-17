const router = require('express').Router()

const turistaControllers = require('../controllers/turistaControllers')

const guiaControllers = require('../controllers/guiaControllers')

const empreendedoresControllers = require("../controllers/empreendedoresControllers");

router.post('/turista/create', turistaControllers.createTurista)

router.post('/guia/create', guiaControllers.createGuia)

router.post("/empreendedores/create", empreendedoresControllers.createEmpreendedores);

module.exports = router 