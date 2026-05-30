require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Conexão com o banco
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 50,        // ← Seu limite atual é 500. Use 50, bem seguro.
  minPoolSize: 10,        // ← Mantém 10 conexões sempre abertas (evita picos de abertura)
  maxIdleTimeMS: 30000,   // ← Fecha conexões paradas após 30s
  connectTimeoutMS: 10000, // ← Timeout de conexão
  socketTimeoutMS: 55000,  // ← Timeout de operações longas
  serverSelectionTimeoutMS: 15000
})
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

module.exports = app;

//Servidor
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`);
  });
}