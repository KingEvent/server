const router = require('express').Router();
const ControllerUser = require('../controller/userController')

router.post('/', ControllerBook.create)

router.get('/', ControllerBook.findAll)

module.exports = router;