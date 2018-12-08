const mongoose = require('mongoose');
const Movie = new mongoose.Schema({
    name : {type: String, default: ''},
    year: {type: Number, default: 0}
})
module.exports = mongoose.model('Movie', Movie)