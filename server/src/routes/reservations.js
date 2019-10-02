const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation');

router
  .route('/')
  .get(reservationController.getReservations)
  .post(reservationController.addReservation);

router
  .route('/:id')
  .get(reservationController.getReservationById)
  .put(reservationController.editReservation)
  .delete(reservationController.deleteReservation);

module.exports = router;