const express = require("express");
const userSchema = require("../models/user");
const {mailCheck} = require("../bd/mailCheck")
const {encriptoPass}=require("../bd/encriptoPass")

// create user


function register (req, res) {

  let datosUsuario = req.body

    let emailIngresado=datosUsuario.email;
    
    mailCheck(emailIngresado) //------------------------le enviamos el mail ingresado, si nos devuelve un true=esta en la bd y si es false=no está en la bd
    .then((emailEncontrado)=>{

      if (emailEncontrado==false){

        encriptoPass(datosUsuario.contraseña)
        .then((contraseña) => {

          datosUsuario.contraseña=contraseña
          const user = userSchema(datosUsuario);//-----------------guardamos el usuario en la bd
          user
          .save()
          .then((data) => res.json(data))
          .catch((error) => res.status(400).send({ error: error }));
        })
          
      }
      else if(emailEncontrado==true){
        res.status(400).send({ error: "Ya existe un usuario registrado con ese email" })
          return
      }
      
    })
    .catch((error) => res.json({ message: error }));
  
}

module.exports = {register}




/*
// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
*/