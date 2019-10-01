const mongoose = require('mongoose');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    original_language: String,
    id: {
        type: Number,
        required: true,
    },
    adult: Boolean,
    release_date: String,
    overview: {
        type: String,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    vote_count: Number,
    poster_path: String,
    popularity: {
        type: Number,
        required: true
    },
    genres: [String],
    video: {
        key: String
    },
    runtime: {
        type: Number,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');

function validateMovie(movie) {
    const schema = {
        title: Joi.string().required(),
        original_title: Joi.string(),
        original_language: Joi.string(),
        id: Joi.number().required(),
        adult: Joi.string(),
        release_date: Joi.date(),
        overview: Joi.string().required(),
        vote_average: Joi.number().required(),
        vote_count: Joi.number(),
        poster_path: Joi.string(),
        popularity: Joi.number().required(),
        genres: Joi.array(),
        video:  Joi.string(),
        runtime: Joi.number().required()
    }
    return Joi.validate(movie, schema);
}

exports.movieSchema = movieSchema;
exports.validate = validateMovie;
exports.Movie = Movie;