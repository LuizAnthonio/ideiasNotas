const UserModel = require("../models/User")
const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

const verificarJWT = require("../middleware/authMiddleware");


router.post("/login", userController.login);

router.post("/",verificarJWT,userController.criar)
router.get("/",verificarJWT,userController.mostra)
router.delete("/:id",verificarJWT,userController.excluir)
router.put("/:id",verificarJWT, userController.update)


module.exports = router;