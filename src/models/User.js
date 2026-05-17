const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  user: String,
  email: String,
  senha: String,
  nivel: Number

}, { timestamps: true });

module.exports = mongoose.model("user", UserSchema);

