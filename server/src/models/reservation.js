const mongoose = require('mongoose');
const Joi = require('joi');


const reservationSchema = new mongoose.Schema({

    address: {
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        }
    },
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
    showTiming: {
        hour: {
            type: Number,
            min: 10,
            max: 23,
            required: true,
            default: new Date().getHours(),
        },
        minute: {
            type: Number,
            min: 0,
            max: 59,
            required: true,
            default: new Date().getMinutes(),
        },
    },
    seats: {
        type: [Number]
    },
    tickets: [{
                type: String,
                price: Number,
                required: true
            }],
    reservationExpirationTime: Date
})

const Reservation = mongoose.model('Reservation' , reservationSchema);

function validateReservation(reservation) {
    const schema = {
        movie: Joi.string().required(),
        date: Joi.date().greater('now').required(),
        address: Joi.object().keys({
            city: Joi.string().required(),
            address: Joi.string().required()
        }),
        showTiming: Joi.object().keys({
            hour: Joi.number().min(0).max(23).required(),
            minute: Joi.number().min(0).max(59).required(),
        }),
        seats: Joi.array().includes(Joi.number().min(1)),
        tickets: Joi.array().includes(Joi.object().keys({
            price: Joi.number().greater(0).required(),
            type: Joi.string().required()
        }))
    }
    return Joi.validate(reservation , schema);
}

exports.Reservation = Reservation;
exports.validate = validateReservation;
exports.reservationSchema = reservationSchema;

