const userSchema = require("../models/user");
const {encriptoPass}=require("../bd/encriptoPass")

function editProfile (req, res) {

    //---------------------------------------------------------Creamos promesa para modificar datos de la bd
    let modificoDatos = new Promise((resolve ,reject)=>{
        setTimeout(
            ()=>{
                userSchema.updateOne(
                    { _id: idUser }, 
                    {$set: nuevosDatos},
                    function(error, info) {
                        if (error) reject(error)
                        else resolve(true)
                    }
                )   
            },200
        );
    });

    idUser= req.user._id
    var nuevosDatos=req.body

    if (nuevosDatos.contraseña){

            encriptoPass(nuevosDatos.contraseña)
            .then((contraseña) => {nuevosDatos.contraseña=contraseña}) 
  
    }

    modificoDatos.then((respuesta)=>{
        if (respuesta==true){
            res.status(200).send({msj: "Datos modificados"} )
        }
    }).catch((error)=>{
        res.status(400).send({ error: "Error al modificar datos: "+error })
    }); 

}



module.exports = {editProfile}