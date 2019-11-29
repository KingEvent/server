const bcrypt = require('bcryptjs');

function makePass(password) {
    // return bcrypt.hashSync(password, 6)
    // let salt = bcrypt.genSaltSync(10);
  
    return bcrypt.hashSync(password, 8);
     
}

function checkPass(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    makePass,
    checkPass
}