const bcrypt = require('bcrypt');

function makePass(password) {
    return bcrypt.hash(password, 6)
}

function checkPass(password, hash) {
    return bcrypt.compare(password, hash)
}

module.exports = {
    makePass,
    checkPass
}