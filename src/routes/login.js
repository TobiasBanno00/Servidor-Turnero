const {userCheck} = require("../bd/userCheck")
const {generoToken} =require ("../jwt/genderToken")
const {DatosUsuario} = require("../bd/userData")


function login (req, res) {

      let email = req.body.email;
      let contraseña = req.body.contraseña;
      
      userCheck(email, contraseña)
      .then((existencia) =>{
        if (existencia==true){

          DatosUsuario(email)                  // devuelve todos los datos del usuario al pasarle el mail
          .then((usuarioLogin)=> {
            token=generoToken(usuarioLogin)
            res.json(token)
          })
          .catch(() => res.status(400).send({ error: "No se genero token" }));
      
        }else  res.status(400).send({ error: "Usuario invalido" })
      } )
      .catch((error) => res.json({ error: error }));
    
  }
  
  module.exports = {login}