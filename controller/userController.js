const User = require('../models/users')
const { checkPass } = require('../helper/bcrypt')
const { genToken } = require('../helper/token')

class Controller {

    static register(req, res, next) {
        const { username, email, password } = req.body
        const obj = { username, email, password }
        User.create(obj)
            .then((data) => {
                res.status(201).json(data)
            }).catch(next);
    }

    static login(req, res, next) {
        User.find(req.body.username)
            .then((user) => {
                if (!user || user.length == 0) throw { message: "user not found" }

                let check = checkPass(req.body.password, user.password)
                let token = ''

                if (check) {
                    token = genToken({ id: user.id })
                } else {
                    throw { message: "Password incorrect" }
                }

                res.status(200).json(data)
            }).catch((next));
    }

}

module.exports = Controller