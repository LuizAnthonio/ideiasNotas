const UnidadeModel = require("../models/Unidade")
const express = require("express")
const router = express.Router()
const unidadeController = require("../controllers/unidadeController")

const verificarJWT = require("../middleware/authMiddleware");


router.post("/",verificarJWT,unidadeController.criar)
router.get("/",unidadeController.mostra)
router.delete("/:id",verificarJWT,unidadeController.excluir)
router.put("/:id",verificarJWT, unidadeController.update)


module.exports = router;