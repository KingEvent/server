const mongoose = require('mongoose')
const validateEmail = require('../helpers/email')
const { makePass } = require('../helpers/bcrypt')

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

UserSchema.pre('save', function(next) {
    this.password = makePass(this.password)
    // console.log(this.password)
    next() // not a best practice, besok tanya lagi ke Ka Dimitri atau Ka Hardim
    // console.log(this)
});

module.exports = mongoose.model('User', UserSchema)