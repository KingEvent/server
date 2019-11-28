const { verify } = require('../helpers/token')

function isLogin(req, res, next) {
    try {
        req.decode = verify(req.headers.access_token)
        next()
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", err: error })
    }
}

module.exports = isLogin