import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Pokemon from '../models/Pokemon.js';
import pokemons from '../data/pokemonsList.js'; 

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Pokemon.deleteMany(); 
    const pokemonsWithImages = pokemons.map(pokemon => ({
      ...pokemon,
      image: `/assets/pokemons/${pokemon.id}.png`
    }));

    await Pokemon.insertMany(pokemonsWithImages);

    console.log('✔ Données importées dans MongoDB');
    process.exit();
  } catch (error) {
    console.error('❌ Erreur d’import :', error.message);
    process.exit(1);
  }
};

importData();