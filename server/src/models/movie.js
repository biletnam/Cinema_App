const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: String,
    
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');

function validateMovie(movie) {
    const schema = {
        title: Joi.string().required()
    }
    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.validate = validateMovie;
exports.Movie = Movie;