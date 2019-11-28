const User = require('../models/users')
const { checkPass } = require('../helpers/bcrypt')
const { genToken } = require('../helpers/token')

class Controller {

    static register(req, res, next) {
        console.log(req.body)
        const { username, email, password } = req.body
        const obj = { username, email, password }
        User.create(obj)
            .then((data) => {
                console.log(data)
                console.log('cobacoba');
                res.status(201).json(data)

            }).catch(next);
    }

    static login(req, res, next) {
        User.findOne({username: req.body.username})
            .then((user) => {
                if (!user || user.length == 0) throw { message: "user not found" }
                console.log(user);
                let check = checkPass(req.body.password, user.password)
                let token = ''

                if (check) {
                    token = genToken({ id: user.id })
                } else {
                    throw { message: "Password incorrect" }
                }

                res.status(200).json({token})
            }).catch((next));
    }

}

module.exports = Controller