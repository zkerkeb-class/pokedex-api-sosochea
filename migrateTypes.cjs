const fs = require('fs');
const mongoose = require('mongoose');
const pokemonsData = require('./src/data/pokemons.json');
const Pokemon = require('./src/models/Pokemon');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const updateTypes = async () => {
  for (const poke of pokemonsData) {
    await Pokemon.updateOne({ id: poke.id }, { types: poke.types });
  }
  console.log('✔ Types mis à jour avec succès.');
  mongoose.disconnect();
};

updateTypes();