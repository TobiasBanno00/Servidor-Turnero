//const jwt = require('jsonwebtoken');
var jwt = require("jwt-simple");
var moment = require("moment");
const config =require("../config/config")

keyToken= config.TOKEN_SECRET

var generoToken=(usuarioLogin)=>{

   // return token= jwt.sign(usuarioLogin.toJSON() , keyToken , {expiresIn: "30000 days"});
   var payload = {
      sub: usuarioLogin,
      iat: moment().unix(),
      exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, keyToken);
}

module.exports = {generoToken}