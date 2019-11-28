const router = require('express').Router();
const routerUser = require('./userRouter')

router.use('/user', routerUser)

module.exports = router;