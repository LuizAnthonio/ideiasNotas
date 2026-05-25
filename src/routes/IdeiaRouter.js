const IdeiaModel = require("../models/Ideia")
const express = require("express")
const router = express.Router()
const ideiaController = require("../controllers/ideiaController")
const verificarJWT = require("../middleware/authMiddleware");

router.post("/",verificarJWT,ideiaController.criar)
router.get("/",verificarJWT,ideiaController.mostra)
router.delete("/:id",verificarJWT,ideiaController.excluir)
router.put("/:id",verificarJWT, ideiaController.update)


module.exports = router;