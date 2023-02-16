const {estadoConexionBd} = require("../bd/conectDb")

exports.chequeoConexionBd = function (req, res, next) {

    if (estadoConexionBd()==true) next();
    else return res.status(500).send({ error: "Conexion perdida con base de datos" })
  
};