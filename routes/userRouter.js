const router = require('express').Router();
const ControllerUser = require('../controller/userController')
const isLogin = require('../middlewares/tokenCheck')

 
router.post('/register', ControllerUser.register)
 
router.post('/login', ControllerUser.login)

module.exports = router;