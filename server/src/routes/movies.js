const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies');

// Base route /api/movies
router
    .route('/')
    .get(moviesController.getMovies)
    .post(moviesController.addMovie);

router
    .route('/generate')
    .get(moviesController.generateMovies)


 router
    .route('/:id')
    .get(moviesController.getMovieById)
    .put(moviesController.updateMovie)
    .delete(moviesController.removeMovie);

module.exports = router;