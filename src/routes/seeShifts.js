const turnoSchema = require("../models/turno");

function seeShifts (req, res) {
    idUser= req.user._id
    
    turnoSchema.find()
        .then((turnos) => {
            if (turnos==null){
                res.status(400).send({ error: "Info no encontrada en la BD" })
            }
            else{
                res.json(turnos)
            }
        }).catch((error)=>{
            res.status(400).send({ error: error })
        })
    
}

module.exports = {seeShifts}