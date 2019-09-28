const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies');

// Base route /api/movies
router
    .route('/')
    .get(moviesController.getMovies)
    .post(moviesController.addMovie);

 router
    .route('/:id')
    .get(moviesController.getMovieById)
    .put(moviesController.updateMovie)
    .delete(moviesController.removeMovie);

// router
//     .route('/import-movies')
//     .get(moviesController.generateMovies)

module.exports = router;