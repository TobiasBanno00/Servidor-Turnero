const turnoSchema = require("../models/turno");

var shiftCheck=(idTurno)=>{

    return  turnoSchema.findOne({"_id": idTurno})       // si encuentra turno devuelve un true
        .then(( turno) => {
            if (turno==null) return false;
            return true
        }).catch((error)=>{
            return error;
        })
    
}

module.exports={shiftCheck}