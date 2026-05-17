const UnidadeModel = require("../models/Unidade")
const express = require("express")
const router = express.Router()
const unidadeController = require("../controllers/unidadeController")

const verificarJWT = require("../middleware/authMiddleware");


router.post("/",unidadeController.criar)
router.get("/",verificarJWT,unidadeController.mostra)
router.delete("/:id",unidadeController.excluir)
router.put("/:id", unidadeController.update)


module.exports = router;