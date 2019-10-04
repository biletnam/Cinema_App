//require('babel-core/register');

require('./src/data/db')
const Joi = require('joi');
Joi.ObjectId = require('joi-objectid')(Joi);


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const movies = require('./src/routes/movies');
const shows = require('./src/routes/shows');
const generateShows = require('./src/routes/generateShows');


const port = process.env.PORT || 5000;

app.set('port', port);
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('tiny'));
app.use(helmet());

app.use('/api/movies', movies);
app.use('/api/shows', shows);
app.use('/api/generate-shows', generateShows);

let server = app.listen(app.get('port'), () => {
    var port = server.address().port;
    console.log('All run on port: ' + port)
})