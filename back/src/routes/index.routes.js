const router = require('express').Router()

const turistaControllers = require('../controllers/turistaControllers')

const guiaControllers = require('../controllers/guiaControllers')

router.post('/turista/create', turistaControllers.createTurista)

router.post('/guia/create', guiaControllers.createGuia)

module.exports = router 