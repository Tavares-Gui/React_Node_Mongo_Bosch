const mongoose = require('mongoose');

const Carros = mongoose.model('Carros', {
    model: String,
    brand: String,
    color: String,
    price: Number
})

module.exports = Carros;