const bcrypt = require("bcryptjs");
const userSchema = require("../models/user");

var userCheck=(emailIngresado,passwordIngresado)=>{

    return  userSchema.findOne({"email": emailIngresado})
        .then((usuarioBd) => {
            
            passwordBd=usuarioBd.contraseña
            existencia=bcrypt.compareSync(passwordIngresado,passwordBd);
            return existencia
            
        }).catch((error)=>{
            return error})
    
}

module.exports={userCheck}