const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

const connectDatabase = () =>{
    console.log('Esperando conexão');
    
    mongoose.connect("mongodb+srv://Zezin0001:yGEFbGDqtV4MzNFH@cluster0.o5bhl.mongodb.net/oanalista?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log('Mongo Conectado Com SUCESSO!')).catch((error)=> console.log(error))
}



const ideias = require("./routes/IdeiaRouter")

app.use(cors())

app.use("/",ideias)



app.listen(3000, () => {
    console.log("rodando!!")
})