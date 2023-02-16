const turnoSchema = require("../models/turno");
const {shiftCheck} = require("../bd/shiftCheck")

function deleteShift (req, res) {

    const id= req.query.id;
    shiftCheck(id) //------------------------le enviamos el id del turno, si nos devuelve un true, este  existe y si es false no existe
    .then((estadoId)=>{
        if(estadoId==true){
            turnoSchema
            .remove({ _id: id })
            .then(() =>  res.status(200).send({msj: "Turno eliminado"}))
            .catch((error) => res.status(400).send({ error: error }));
        }
        else{
            res.status(400).send({ error: "Turno no existe en la bd" })
        }
    })
}

module.exports= {deleteShift}