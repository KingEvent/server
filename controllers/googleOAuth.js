'use strict';
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class GoogleOAuth {
    static googleOAuth(req, res, next) {
        client
            .verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(ticket=> {
                // send token to client
                let { name, email } = ticket.getPayload();
                const token = jwt.sign({name, email}, process.env.JWT_GOOGLESECRET)
                res.json(token)
            })
            .catch(next)
    };
};


module.exports = GoogleOAuth;