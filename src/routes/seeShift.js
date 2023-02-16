const turnoSchema = require("../models/turno");

function seeShift (req, res) {
    idUser= req.user._id
    
    turnoSchema.findOne({"idUser": idUser})
        .then((turno) => {
            if (turno==null){
                res.status(400).send({ error: "Info no encontrada en la BD" })
            }
            else{
                res.json(turno)
            }
        }).catch((error)=>{
            res.status(400).send({ error: error })
        })
    
}

module.exports = {seeShift}