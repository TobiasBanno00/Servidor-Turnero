var jwt = require("jwt-simple");
var moment = require("moment");
const config =require("../config/config")

keyToken= config.TOKEN_SECRET

exports.autenticoToken = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "Tu petición no tiene autorización" });
  }

  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, keyToken);


  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: "El token ha expirado" });
  }

  req.user = payload.sub;
  next();
};