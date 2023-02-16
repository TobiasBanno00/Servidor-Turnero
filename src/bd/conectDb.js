const mongoose = require("mongoose");

const UrlMongo=`mongodb+srv://TobiasBanno:Tb339059@redsocial.mvci4kr.mongodb.net/miTurnero`

var conectDb=()=>{
mongoose
.connect(UrlMongo)
.then(() => console.log("Connected Bd"))
.catch((error) => console.error(error));
}

var estadoConexionBd=()=>{
    let estadoConexion=mongoose.connection.readyState
    if (estadoConexion == 1 || estadoConexion == 2){
        return true
    }else return false
}


module.exports = {conectDb, estadoConexionBd}