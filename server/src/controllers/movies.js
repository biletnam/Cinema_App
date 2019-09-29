const {
    Movie
} = require('../models/movie');

const movieService = require('../services/movieService');
const { getNowPlaying, getDetails } = require('../helperFunctions/movies')

module.exports = {

  generateMovies: async (req, res) => {
    try{
    let nowPlaying = await getNowPlaying();
    
    nowPlaying.results.map(item => {
      const movie = new Movie({
        title: item.title,
        original_language: item.original_language,
        id: item.id,
        adult: item.adult,
        release_date: item.release_date,
        overview: item.overview,
        vote_average: item.vote_average,
        vote_count: item.vote_count,
        poster_path: item.poster_path,
        popularity: item.popularity,
        genres: item.genres,
        video: item.video
      });
      
      movie.save();
     
    })
    return res.send(nowPlaying);
  } catch(error) {
      res.status(500).send('An error occurred.');
  }
},

  getMovieById: async function (req, res) {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).send('Movie not found.');
        res.send(movie);

    } catch (error) {
        res.status(500).send('An error occurred.');
    }
  },

  getMovies: async function (req, res) {
    try {
      const movies = await Movie.find().sort('title');
      res.send(movies);
  } catch (error) {
      res.status(500).send('An error occured.');
  }
},

  addMovie: async (req, res) => {
    try {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
        const movie = new Movie({
          title: req.body.title,
          original_language: req.body.original_language,
          id: req.body.id,
          adult: req.body.adult,
          release_date: req.body.release_date,
          overview: req.body.overview,
          vote_average: req.body.vote_average,
          vote_count: req.body.vote_count,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          genres: req.body.genres,
          video: req.body.video
        });

      await movie.save();

      res.send(movie);
    } catch (error) {
        res.status(500).send('An error occured.');
    }
  },

  updateMovie: async (req, res) => {
    try {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const movie = await Movie.findByIdAndUpdate(req.params.id,
            {
              title: req.body.title,
              original_language: req.body.original_language,
              id: req.body.id,
              adult: req.body.adult,
              release_date: req.body.release_date,
              overview: req.body.overview,
              vote_average: req.body.vote_average,
              vote_count: req.body.vote_count,
              poster_path: req.body.poster_path,
              popularity: req.body.popularity,
              genres: req.body.genres,
              video: req.body.video
            },
            { new: true});
        if(!movie) return res.status(404).send('Movie not found.');
        res.send(movie);
    } catch (error) {
        res.status(500).send('An error occured.');
    }
 },

  removeMovie: async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete(req.params.id);
        if(!movie) return res.status(404).send('Movie not found.');
        res.send(movie);
    } catch (error) {
        res.status(500).send('An error occured.');
    }
 }
}