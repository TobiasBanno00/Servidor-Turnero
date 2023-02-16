const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  celular: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  }
})

  
module.exports = mongoose.model('usuario', userSchema);