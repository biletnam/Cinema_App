const express = require('express');
const router = express.Router();
const showsController = require('../controllers/shows');

router
  .route('/')
  .get(showsController.getShows);

router
  .route('/:id')
  .get(showsController.getShowById);

module.exports = router;