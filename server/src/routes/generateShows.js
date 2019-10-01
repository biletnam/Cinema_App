const express = require('express');
const router = express.Router();
const generateShows = require('../controllers/generateShows');

router
  .route('/:id')
  .get(generateShows);

module.exports = router;