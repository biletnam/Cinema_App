const { Show, validate } = require('../models/show');
const { Movie } = require('../models/movie');

const generateShows = async (req, res) => {
  try {
    // d is a number representing a weekday (0 = monday, 1 = tuesday.. )

    // TODO generate shows to db

    const d = Number(req.params.id);
    const movies = await Movie.find().sort('-popularity');
    const hours = ['10', '16', '13', '22', '19'];
    const price = 20;
    const seats = generateSeats();
    shows = [];

    if (d < 5) {
      for(let h=0; h<=3; h++) {
        let show = {
          movie: movies[d + (h*5)]._id,
          day: d,
          hour: hours[h],
          price: price,
          seatsAvailable: seats
        }
        shows.push(show);
      }
      let primeTimeShow = {
        movie: movies[d]._id,
        day: d,
        hour: hours[hours.length-1],
        price: Math.round(price * 1.5),
        seatsAvailable: seats
      }
      shows.push(primeTimeShow);
    }
    if (d >= 5) {
      for(let h=0; h<=3; h++) {
        let show = {
          movie: movies[h]._id,
          day: d,
          hour: hours[h],
          price: Math.round(price * 1.5),
          seatsAvailable: seats
        }
        shows.push(show);
      }
      let primeTimeShow = {
        movie: movies[0]._id,
        day: d,
        hour: hours[hours.length-1],
        price: Math.round(price * 1.5),
        seatsAvailable: seats
      }
      shows.push(primeTimeShow);
    }

  res.send(shows);

  } catch (error) {
      res.status(500).send('An error occured.');
  }
}

const generateSeats = () => {
  const seats = [];
  for (let i = 1; i <= 100; i++) {
    seats.push(i);
  }
  return seats;
}

module.exports = generateShows;