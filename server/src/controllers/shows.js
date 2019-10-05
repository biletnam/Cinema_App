const { Show, validate } = require('../models/show');

module.exports = {
  getShowById: async (req, res) => {
    try {
      const show = await Show.findById(req.params.id);
      if (!show) return res.status(404).send('Show not found.');
      res.send(show);
    } catch (err) {
      res.status(500).send('An error occurred');
    }
  },
  getShows: async (req, res) => {
    try {
      const shows = await Show.find();
      res.send(shows);
    } catch (err) {
      res.status(500).send('An error occurred');
    }
  },
  // updating show possible only via making reservation, req body must have seatsAvailable and reservation properties
  bookShow: async (req, res) => {
    try{
      const show = await Show.findById(req.params.id);
      if (!show) return res.status(404).send('Show not found.');

      show.seatsAvailable = [...req.body.seatsAvailable];
      show.reservations.push(req.body.reservation);

      await show.save();
      res.send(show);
    } catch (err) {
      res.status(500).send('An error occurred');
    }
  },
  deleteShow: async (req, res) => {
    try {
      const show = await Show.findByIdAndRemove(req.params.id);
      if (!show) return res.status(404).send('Show not found.');
      res.send(show);
    } catch (error) {
        res.status(500).send('An error occured.');
    }
  }
}