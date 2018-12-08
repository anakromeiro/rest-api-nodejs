const mongoose = require('mongoose');
const Actor = new mongoose.Schema({
    firstName : {type: String, default: ''},
    lastName : {type: String, default: ''},
    mostFamousMovie : {type: String, default: ''},
    age: {type: Number, default: 0},
    country : {type: String, default: ''}
})
module.exports = mongoose.model('Actor', Actor)