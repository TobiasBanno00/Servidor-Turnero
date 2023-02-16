const {estadoConexionBd} = require("../bd/conectDb")

exports.adminUser = function (req, res, next) {

    rol=req.user.rol
    console.log(rol)
    if (rol=="adm") next();
    else return res.status(400).send({ error: "Usuario no autorizado" })
  
};