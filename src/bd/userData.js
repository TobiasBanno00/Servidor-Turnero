const userSchema = require("../models/user");

var DatosUsuario=(email)=>{

    return  userSchema.findOne({"email": email})
        .then((usuarioBd) => {
            
            return usuarioBd
            
        }).catch((error)=>{
            return error})
    
}

module.exports={DatosUsuario}