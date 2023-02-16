const mongoose = require("mongoose");

const turnoSchema = mongoose.Schema({
  idUser: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  }
})

  
module.exports = mongoose.model('turno', turnoSchema);