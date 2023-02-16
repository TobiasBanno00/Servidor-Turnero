const {ObjectId} = require('mongodb');
const userSchema = require("../models/user");

function informationProfile (req, res) {
    idUser= req.user._id
    
    userSchema.findOne({"_id": ObjectId(idUser)})
        .then(( infoUsuario) => {
            if (infoUsuario==null){
                res.status(400).send({ error: "Info no encontrada en la BD" })
            }
            else{
                res.json(infoUsuario)
            }
        }).catch((error)=>{
            res.status(400).send({ error: error })
        })
    
}

module.exports = {informationProfile}