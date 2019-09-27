const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        reqired: true
    },    
    vote_average: {
        type: Number,
        reqired: true
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');

function validateMovie(movie) {
    const schema = {
        title: Joi.string().required(),
        vote_average: Joi.number().required(),
        overview: Joi.string().required(),
        release_date: Joi.date().required()
    }
    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.validate = validateMovie;
exports.Movie = Movie;