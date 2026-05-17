const mongoose = require("mongoose");

const UnidadeSchema = new mongoose.Schema({
  nome: String,
  tipo: String,

});

module.exports = mongoose.model("unidade", UnidadeSchema);

