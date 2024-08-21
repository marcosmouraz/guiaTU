const router = require('express').Router()

const turistaControllers = require('../controllers/turistaControllers')
const guiaControllers = require('../controllers/guiaControllers')
const empreendedoresControllers = require("../controllers/empreendedoresControllers");
const authControllers = require('../controllers/authControllers');

router.post('/turista/create', turistaControllers.createTurista)

router.post('/guia/create', guiaControllers.createGuia)

router.post("/empreendedores/create", empreendedoresControllers.createEmpreendedores);

router.post("/turista/login", authControllers.turistaLogin)

router.post("/empreendedores/login", authControllers.empreendedoresLogin)

module.exports = router 