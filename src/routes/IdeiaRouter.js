const IdeiaModel = require("../models/Ideia")
const express = require("express")
const router = express.Router()
const ideiaController = require("../controllers/ideiaController")

router.post("/",ideiaController.criar)
router.get("/",ideiaController.mostra)
router.delete("/:id",ideiaController.excluir)
router.put("/:id", ideiaController.update)


module.exports = router;