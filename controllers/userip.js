'use strict';
const axios = require('axios');
class ipAPI {
    static getUserIP(req, res, next) {
        axios({
            method: 'get',
            url: 'http://ip-api.com/json'
        })
            .then(result=> {
                res.status(result.status).json(result.data);
            })
            .catch(next);
    };
}
module.exports = ipAPI;