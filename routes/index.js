const router = require('express').Router();
const calendarRouter = require('../routes/calendar');

router.use('/calendar', calendarRouter)

module.exports = router;