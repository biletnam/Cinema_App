const { Show, validate } = require('../models/show');
const { Movie } = require('../models/movie');

const generateShows = async (req, res) => {
  try {
    const day = Number(req.params.id);
    const movies = await Movie.find().sort('-popularity');
    const startHoursOfShows = ['10', '13', '16', '22'];
    const primeTimeHour = '19';
    const price = 20;
    const prices = generatePrices(price);
    const premiumPrice = Math.round(price * 1.5);
    const premiumPrices = generatePrices(premiumPrice);
    const seats = generateSeats();
    // weekdays counting from monday at 0, so weekend is saturday = 5 and sunday = 6
    const saturday = 5;
    const isWeekend = day >= saturday;

    let shows = [];

    shows = startHoursOfShows.map((startHour, i)=>{
      const show = {
        movie: movies[isWeekend ? i : day + (i*5)]._id,
        day: day,
        hour: startHour,
        prices: isWeekend ? premiumPrices : prices,
        seats: seats
      }
      return show;
    });
    const primeTimeShow = {
        movie: movies[isWeekend ? 0 : day]._id,
        day: day,
        hour: primeTimeHour,
        prices: premiumPrices,
        seats: seats
    }
    shows.push(primeTimeShow);

    shows.forEach( el => {
      const show = new Show(el);
      show.save();
    })

    res.send(shows);

  } catch (error) {
      res.status(500).send('An error occured.');
  }
}

const generateSeats = () => {
  const seats = [];
  for (let i = 1; i <= 100; i++) {
    const seat = {
      number: i,
      isAvailable: true,
      isReserved: false
    };
    seats.push(seat);
  }
  return seats;
}

const generatePrices = regularPrice => {
  const prices = [
    {
      ticketType: 'regular',
      price: regularPrice
    },
    {
      ticketType: 'student',
      price: Math.round(regularPrice * .7)
    },
    {
      ticketType: 'child',
      price: Math.round(regularPrice * .5)
    },
    {
      ticketType: 'senior',
      price: Math.round(regularPrice * .6)
    }
  ];
  return prices;
};

module.exports = generateShows;