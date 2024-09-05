const router = require("express").Router();

const turistaControllers = require("../controllers/turistaControllers");
const guiaControllers = require("../controllers/guiaControllers");
const empreendedoresControllers = require("../controllers/empreendedoresControllers");
const authControllers = require("../controllers/authControllers");
const rotaTuristaControllers = require("../controllers/rotaTuristaControllers")

router.post("/turista/create", turistaControllers.createTurista);
router.post("/turista/login", authControllers.turistaLogin);
router.get("/turista/:id", turistaControllers.getOneTurista);

router.post("/guia/create", guiaControllers.createGuia);
router.post("/guia/login", authControllers.guiaLogin);
router.get("/guia/:id", guiaControllers.getOneGuia);

router.post("/empreendedor/create", empreendedoresControllers.createEmpreendedores);
router.post("/empreendedor/login", authControllers.empreendedoresLogin);
router.get("/empreendedor/:id", empreendedoresControllers.getOneEmpreendedor);

router.post("/rotaturista/create", rotaTuristaControllers.createRotaTurista);
router.get("/rotaturista/:id", rotaTuristaControllers.getOneRotaTurista);
router.get("/rotaturista/:id", rotaTuristaControllers.getAllRotas);


module.exports = router;
