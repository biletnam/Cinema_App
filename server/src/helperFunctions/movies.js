const {
    Movie
} = require('../models/movie');

const movieService = require('../services/movieService');

module.exports = {
    getNowPlaying: async (req, res) => {
        try {
          const {data} = await movieService.get("/now_playing");
          if (!data) return res.status(404).send('Movies not found.');
          return data;
        } catch (err) {
          res.status(500).send('An error occurred');
        }
      },
      getDetails: async (id) => {
        try {
          const {data} = await movieService.get(`/movie/${id}`);
          return data;
        } catch (err) {
          res.status(500).send('An error occurred');
        }
      },

}