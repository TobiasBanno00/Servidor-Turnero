const express = require("express");
const router = express.Router();
const {register} = require("../routes/register");
const {login} = require("../routes/login");
const {informationProfile} = require("../routes/informationProfile");
const {editProfile} = require("../routes/editProfile");
const {newShift} = require("../routes/newShift");
const {deleteShift} = require("../routes/deleteShift");
const {seeShift} = require("../routes/seeShift");
const {seeShifts} = require("../routes/seeShifts");
const {autenticoToken} = require("../middleware/tokenAuthenticated");
const {adminUser} = require("../middleware/adminUser");
const {chequeoConexionBd} = require("../middleware/dbCheck");

//------------------------------------------------------------- USUARIO
router.post('/registro',chequeoConexionBd, register )
router.post('/acceder', chequeoConexionBd, login )
router.get('/infoPerfil',chequeoConexionBd, autenticoToken, informationProfile )
router.put('/editarPerfil', chequeoConexionBd,autenticoToken, editProfile )

//------------------------------------------------------------- TURNERO
router.post('/nuevoTurno',chequeoConexionBd, autenticoToken, newShift)
router.delete('/eliminarTurno',chequeoConexionBd, autenticoToken, deleteShift)
router.get('/verTurno', autenticoToken, seeShift)
router.get('/verTurnos', autenticoToken,adminUser, seeShifts) //------------------------------>Solo el adm le pega
//router.get('/turnoNoDisponible', autenticoToken, shiftNotAvailable)
 
module.exports = router;


    




