const router = require('express').Router();
const routerUser = require('./userRouter') 
const calendarRouter = require('../routes/calendar');
const isLogin = require('../middlewares/tokenCheck')

router.use('/user', routerUser)
router.get('/tes', isLogin, (req, res)=> res.send("Hello World"))
router.use('/calendar', calendarRouter)

module.exports = router;
