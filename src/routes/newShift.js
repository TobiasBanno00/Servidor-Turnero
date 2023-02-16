const turnoSchema = require("../models/turno");
const {dateCheck} = require("../bd/dateCheck")

function newShift (req, res) {

    infoTurno= {
            idUser: req.user._id,
            fecha: req.body.fecha
        }

    
        dateCheck(infoTurno.fecha)
        .then((fechaDisponible)=>{

            if (fechaDisponible){
                const turno = turnoSchema(infoTurno);//-----------------guardamos el usuario en la bd
                turno
                .save()
                .then((data) => res.json(data))
                .catch((error) => res.status(400).send({ error: error }));
            }

            else res.status(400).send({ error: "fecha/horario no disponible" })

        })

}

module.exports = {newShift}