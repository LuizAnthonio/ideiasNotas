const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Conexão com o banco
mongoose.connect(
    "mongodb+srv://Zezin0001:yGEFbGDqtV4MzNFH@cluster0.o5bhl.mongodb.net/oanalista?retryWrites=true&w=majority"
)
.then(() => console.log("Mongo conectado"))
.catch((err) => console.log(err))


//Endpoints
const ideias = require("./routes/IdeiaRouter")
const user = require("./routes/UserRouter")

app.use("/", ideias)
app.use("/auth", user)

//Servidor
app.listen(3000, () => {
    console.log("rodando!!")
})