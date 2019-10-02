// const { Show, validate } = require('../models/show');
const { Movie } = require('../models/movie');

const generateShows = async (req, res) => {
  try {
    const day = Number(req.params.id);
    const movies = await Movie.find().sort('-popularity');
    const startHoursOfShows = ['10', '13', '16', '19', '22'];
    const primeTimeHour = '19';
    const price = 20;
    const premiumPrice = Math.round(price * 1.5);
    const seats = generateSeats();
       // weekdays counting from monday at 0, so weekend is saturday = 5 and sunday = 6
    const saturday = 5;
    const isWeekend = day >= saturday;

    let shows = [];

    shows = startHoursOfShows.map((startHour, i)=>{
      const isPremiumHour = primeTimeHour.includes(startHour);
      let movie = null;
      if (isPremiumHour){
        movie = movies[isWeekend ? 0 : day]._id;
      } else {
        movie = movies[isWeekend ? i : day + (i*5)]._id;
      }
      return {
        movie: movie,
        day: day,
        hour: startHour,
        price: (isWeekend || isPremiumHour) ? premiumPrice : price,
        seatsAvailable: seats
      }
    })
    
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