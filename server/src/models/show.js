const mongoose = require('mongoose');
const Joi = require('joi');

const showSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    date: {
        type: Date,
        min: new Date(),
        required: true
    },
    hour: {
        type: Number,
        min: 10, // first morning show starts at 10am
        max: 22, // last show starts at 10pm
        required: true
    },
    price: {
        type: Number,
        min: 10, // cheapest ticket is 10pln
        max: 30, // most expensive ticket is 30pln
        required: true
    },
    seatsAvailable: {
        type: Array,
        required: true
    },
    reservations: {
        type: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reservation'
        }]
    }
});

const Show = mongoose.model('Show', showSchema, 'shows');

function validateShow(show) {
    const schema = {
        movie: Joi.string().required(),
        date: Joi.date().greater('now').required(),
        hour: Joi.number().integer().min(10).max(22).required(),
        price: Joi.number().integer().min(10).max(30).required(),
        seatsAvailable: Joi.array().items(Joi.number()).required(), // add range of numbers (depending on number of seats in the room)
        reservations: Joi.array() // more options?

    }
    return Joi.validate(show, schema);
}

exports.showSchema = showSchema;
exports.validate = validateShow;
exports.Show = Show;