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
    const shows = [];

    const isWeekend = d <= 5;
    const priceAtDay = Math.round(isWeekend? Math.round(price * 1.5): price);

    for(let i=0; i<=3; i++) {
      let show = {
        movie: movies[isWeekend ? i : d + (i*5) ]._id,
        day: d,
        hour: hours[i],
        price: priceAtDay,
        seatsAvailable: seats
      }
      shows.push(show);
    }
    let primeTimeShow = {
      movie: movies[isWeekend? 0: d]._id,
      day: d,
      hour: hours[hours.length-1],
      price: priceAtDay,
      seatsAvailable: seats
    }
    shows.push(primeTimeShow);
    console.log("send")
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