const router = require("express").Router();

const turistaControllers = require("../controllers/turistaControllers");
const guiaControllers = require("../controllers/guiaControllers");
const empreendedoresControllers = require("../controllers/empreendedoresControllers");
const authControllers = require("../controllers/authControllers");

router.post("/turista/create", turistaControllers.createTurista);
router.post("/turista/login", authControllers.turistaLogin);

router.post("/guia/create", guiaControllers.createGuia);
router.post("/guia/login", authControllers.guiaLogin);

router.post("/empreendedor/create", empreendedoresControllers.createEmpreendedores);
router.post("/empreendedores/login", authControllers.empreendedoresLogin);

module.exports = router;
