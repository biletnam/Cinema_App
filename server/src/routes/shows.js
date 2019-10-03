const express = require('express');
const router = express.Router();
const showsController = require('../controllers/shows');

router
  .route('/')
  .get(showsController.getShows);

router
  .route('/:id')
  .get(showsController.getShowById)
  .put(showsController.bookShow)
  .delete(showsController.deleteShow);

module.exports = router;