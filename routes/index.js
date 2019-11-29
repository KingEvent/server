const router = require('express').Router();
const routerUser = require('./userRouter') 
const calendarRouter = require('../routes/calendar');
const isLogin = require('../middlewares/tokenCheck')
const events = require('./events.js')
const ipAPI = require('../controllers/userip');

router.use('/user', routerUser)
router.get('/tes', isLogin, (req, res)=> res.send("Hello World"))
router.use('/calendar', calendarRouter)
router.use('/events', events);
router.get('/user-ip', ipAPI.getUserIP);

module.exports = router;
