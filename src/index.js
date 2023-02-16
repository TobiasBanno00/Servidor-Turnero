require("dotenv").config();
const express = require("express");
const {runServer} = require("./server/runServer");
const {conectDb, estadoConexionBd} = require("./bd/conectDb")
const routed =require("./handlers/routed")
const app = express();


conectDb();
if (estadoConexionBd()==true){

    app.use(express.json());
    app.use("/api", routed);
    
    //run server
    const port = process.env.PORT || 9000;
    app.listen(port, () => console.log("Server listening to", port))

} else{
    console.log("Error conexión  Base de datos")
    return
}





