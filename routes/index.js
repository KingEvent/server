const router = require('express').Router();
const routerUser = require('./userRouter') 
const calendarRouter = require('../routes/calendar');
const isLogin = require('../middlewares/tokenCheck')
const events = require('./events.js')

router.use('/user', routerUser)
router.get('/tes', isLogin, (req, res)=> res.send("Hello World"))
router.use('/calendar', calendarRouter)
router.use('/events', events);

module.exports = router;
