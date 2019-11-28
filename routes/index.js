const router = require('express').Router();
const routerUser = require('./userRouter') 
const isLogin = require('../middlewares/tokenCheck')

router.use('/user', routerUser)
// router.use(isLogin)
router.get('/tes', isLogin, (req, res)=> res.send("Hello World"))

module.exports = router; 