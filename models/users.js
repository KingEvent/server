const mongoose = require('mongoose')
const validateEmail = require('../helper/email')
const makePass = require('../helpers/bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username is required'
    },
    email: {
        type: String,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: 'Password is required',
        minlength: 4,
        maxlength: 12
    }
})

TransactionSchema.pre('save', (next) => {

    this.password = makePass(this.password)

    next()
});

module.exports = mongoose.model('User', UserSchema)