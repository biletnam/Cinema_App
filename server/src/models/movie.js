const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        reqired: true
    },    
    description: {
        type: String,
        reqired: true,
        minlength: 5,
        maxlength: 300
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');

function validateMovie(movie) {
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required(),
        director: Joi.string().required(),
        year: Joi.number().required()
    }
    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.validate = validateMovie;
exports.Movie = Movie;