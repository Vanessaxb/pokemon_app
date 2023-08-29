const mongoose = require('mongoose');

//create a pokemon schema
const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  }
})


//Pokemon model
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;