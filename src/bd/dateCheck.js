const turnoSchema = require("../models/turno");

var dateCheck=(fecha)=>{  // Si la fecha está disponible devuelve un true sino un false

    return  turnoSchema.findOne({"fecha": fecha})
        .then(( fechaEncontrada) => {
            if (fechaEncontrada==null) return true;
            return false
        }).catch((error)=>{
            return error;
        })
    
}

module.exports={dateCheck}