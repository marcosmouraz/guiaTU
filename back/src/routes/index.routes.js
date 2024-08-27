const router = require("express").Router();

const turistaControllers = require("../controllers/turistaControllers");
const guiaControllers = require("../controllers/guiaControllers");
const empreendedoresControllers = require("../controllers/empreendedoresControllers");
const authControllers = require("../controllers/authControllers");

router.post("/turista/create", turistaControllers.createTurista);
router.post("/turista/login", authControllers.turistaLogin);
router.get("/turista/:id", turistaControllers.getOneTurista);

router.post("/guia/create", guiaControllers.createGuia);
router.post("/guia/login", authControllers.guiaLogin);
router.get("/guia/:id", guiaControllers.getOneGuia);

router.post("/empreendedor/create", empreendedoresControllers.createEmpreendedores);
router.post("/empreendedor/login", authControllers.empreendedoresLogin);
router.get("/empreendedor/:id", empreendedoresControllers.getOneEmpreendedor);

module.exports = router;
