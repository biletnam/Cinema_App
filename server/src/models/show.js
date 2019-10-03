const mongoose = require('mongoose');
const Joi = require('joi');

const showSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    day: {
        type: Number,
        min: 0,
        max: 6,
        required: true
    },
    hour: {
        type: String,
        enum: ['10', '13', '16', '19', '22'],
        required: true
    },
    price: {
        type: Number,
        min: 10,
        max: 30,
        required: true
    },
    seatsAvailable: {
        type: Array,
        required: true
    },
    reservations: {
        type: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reservation'
            }
        ]
    }
});

const Show = mongoose.model('Show', showSchema, 'shows');

function validateShow(show) {
    const schema = {
        movie: Joi.string().required(),
        day: Joi.number().min(0).max(6).required(),
        hour: Joi.number().integer().min(10).max(22).required(),
        price: Joi.number().integer().min(10).max(30).required(),
        seatsAvailable: Joi.array().min(0).max(100).required(),
        reservations: Joi.array()
    }
    return Joi.validate(show, schema);
}

exports.showSchema = showSchema;
exports.validate = validateShow;
exports.Show = Show;