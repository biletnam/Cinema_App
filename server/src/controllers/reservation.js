const {Reservation , validate} = require('../models/reservation');


module.exports = {
//    const reservation = await Reservation.findById(req.params.id);

    getReservationById: async (req , res) => {
        try {
            const reserv = await Reservation.findById(req.params.id);
            if (!reserv) return res.status(404).send('Reservation not found.');
            res.send(reserv);
        }catch(err) {
            res.status(500).send('An error occurred');
        }
    },
    getReservations: async (req , res) => {
        try {
            const reservations = await Reservation.find();
            if (!reservations) return res.status(404).send('There are no reservations.');
            res.send(reservations);
        }catch(err) {
            res.status(500).send('An error occurred');
        }
    },
    addReservation: async (req , res) => {
        try {
            const {error} = validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            const reqSeats = req.body.seats.forEach(v => seatss.push(v));
            const tickets = req.body.tickets.forEach(t => tickets.push(t));
            const reservation = new Reservation({
                // 
                address: {
                    city:   req.body.city,
                    street: req.body.street
                },
                movie: req.body.movie,
                date: req.body.date,
                showTiming: {
                    hour: req.body.hour,
                    minute: req.body.minute
                },
                seats: reqSeats,
                tickets: tickets
            })
            await reservation.save();
            res.send(reservation);
        }catch(err) {
            res.status(500).send('An error occurred');
        }
    },
    deleteReservation: async(req , res) => {
        try {
            const reserv = await Reservation.findByIdAndRemove(req.params.id);
            if (!reserv) return res.status(404).send('Reservation not found.');
            res.send(reserv)
        }catch(err) {
            res.status(500).send('An error occurred');
        }
    },
    editReservation: async (req , res) => {
        try {
            const reserv = await Reservation.findById(req.params.id);
            if (!reserv) return res.status(404).send('Reservation not found.');
            const reqSeats = req.body.seats.forEach(v => seatss.push(v));
            const tickets = req.body.tickets.forEach(t => tickets.push(t));
            let reservation = new Reservation({
                address: {
                    city:   req.body.city,
                    street: req.body.street
                },
                movie: req.body.movie,
                date: req.body.date,
                showTiming: {
                    hour: req.body.hour,
                    minute: req.body.minute
                },
                seats: reqSeats,
                tickets: tickets
            });
            let obj = reservation.toObject();
            delete obj._id;
            
            Reservation.update({_id: reservation.id},obj,{upsert: true},(e) => res.send('An error occured'+e));

        } catch(err) {
            res.status(500).send('An error occurred');
        }
    }

}