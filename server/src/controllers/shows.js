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
  addShow: async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const show = new Show({
        movie: req.body.movie,
        date: req.body.date,
        hour: req.body.hour,
        price: req.body.price,
        seatsAvailable: req.body.seatsAvailable,
        reservations: []
      });
      await show.save();
      res.send(show);
    } catch (err) {
      res.status(500).send('An error occurred');
    }
  },

  // updating show possible only via making reservation, req body must have seat and reservation properties

  // FIXME   <============================================================
  // bookShow: async (req, res) => {
  //   try {
  //     // TODO: validation
  //     // const { error } = validate(req.body);
  //     // if (error) return res.status(400).send(error.details[0].message);

  //     const show = await Show.findByIdAndUpdate(
  //       req.params.id,
  //       {
  //         seatsAvailable: seatsAvailable.filter(seat => seat !== req.body.seat),
  //         reservations: [...reservations, req.body.reservation]
  //       },
  //       { new: true}
  //     );
  //     if(!show) return res.status(404).send('Show not found.');
  //     res.send(show);
  //   } catch (error) {
  //       res.status(500).send('An error occured.');
  //   }
  // },
  // ==========================================================================>
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