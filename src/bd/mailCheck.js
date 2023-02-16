
const userSchema = require("../models/user");

var mailCheck=(email)=>{

    return  userSchema.findOne({"email": email})
        .then(( usuarioEncontrado) => {
            if (usuarioEncontrado==null) return false;
            return true
        }).catch((error)=>{
            return error;
        })
    
}

module.exports={mailCheck}