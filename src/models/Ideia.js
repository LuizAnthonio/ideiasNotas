const mongoose = require("mongoose");

const IdeiaSchema = new mongoose.Schema({
  titulo: String,
  descricao: String

}, { timestamps: true });

module.exports = mongoose.model("ideia", IdeiaSchema);

