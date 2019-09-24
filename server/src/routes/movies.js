const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies');

// Base route /api/movies
router
    .route('/')
    .get(()=>console.log('get'));


module.exports = router;