const mongoose = require("mongoose");

const IdeiaSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  tipo:String,
  evolucao:Array,
  modulo: String,
  link: String,
  unidade: String,
  tipoUnidade:String,
  status: String


}, { timestamps: true });

module.exports = mongoose.model("ideia", IdeiaSchema);

