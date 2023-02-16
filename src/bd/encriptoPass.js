const bcrypt = require("bcryptjs");

var encriptoPass=(password)=>{
    
const  costo= 8;

    return bcrypt.hash(password, costo)
	.then(( password) => {
		return password
	}).catch((error)=>{
		return error;
	})
    
}
module.exports = {encriptoPass}