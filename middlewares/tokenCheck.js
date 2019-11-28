const { verify } = require('../helper/token')

function isLogin(req, res, next) {
    try {
        req.decode = verify(req.headers.access_token)
        next()
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" })
    }
}

module.exports = isLogin