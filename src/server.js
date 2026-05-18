require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Conexão com o banco
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo conectado"))
.catch((err) => console.log(err))




//Endpoints
const ideias = require("./routes/IdeiaRouter")
const user = require("./routes/UserRouter")
const unidade = require("./routes/UnidadeRouter")
const handleError = require("./middleware/handlerError")

app.use("/api/ideia", ideias)
app.use("/api/auth", user)
app.use("/api/unidade", unidade)


//handler de erro
app.use(handleError)


//Servidor
app.listen(3000 || process.env.PORT, () => {
    console.log("rodando!!")
})
