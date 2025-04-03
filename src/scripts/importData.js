import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Pokemon from '../models/Pokemon.js';
import pokemons from '../data/pokemonsList.js'; // Assure-toi que ce fichier exporte bien un tableau

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Pokemon.deleteMany(); // Vide la collection avant d'insérer
    await Pokemon.insertMany(pokemons);

    console.log('✔ Données importées dans MongoDB');
    process.exit();
  } catch (error) {
    console.error('❌ Erreur d’import :', error.message);
    process.exit(1);
  }
};

importData();