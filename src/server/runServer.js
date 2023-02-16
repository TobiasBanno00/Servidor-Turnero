const express = require("express");
const app = express();

var runServer =()=>{
    const port = process.env.PORT || 9000;
    app.listen(port, () => console.log("Server listening to", port))
}

module.exports = {runServer}