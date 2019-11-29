if (process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/errorHandler');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('1036554643961-j717p9qisnfam2ruoh35k51p7g0dnsbb.apps.googleusercontent.com')

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(_ => console.log('connected to database.'))
    .catch(_ => console.log('database connection failed.'));
    

app.use(morgan('dev'));
app.use('/', routes);

app.post('/google-signin', (req, res, next)=> {
    client
        .verifyIdToken({
            idToken: req.body.id_token,
            audience: '1036554643961-j717p9qisnfam2ruoh35k51p7g0dnsbb.apps.googleusercontent.com'
        })
        .then(ticket=> {
            const { email, name, picture } = ticket.getPayload();
            res.json(ticket.getPayload())
            console.log(ticket.getPayload())
        })
        .catch(err=> {
            console.log(err)
        })
})

app.use((req, res, next) => {
    const err = {
        msg: 'Not Found.',
        status: 404
    }
    next(err);
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on port PORT`));

module.exports = app