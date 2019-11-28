const router = require('express').Router();
const calendarController = require('../controllers/calendar');

router.post('/', calendarController.addToCalendar)

module.exports = router;