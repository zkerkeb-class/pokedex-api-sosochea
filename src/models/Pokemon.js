import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    english: { type: String, required: true },
    japanese: String,
    chinese: String,
    french: String
  },
  types: [{
    type: String,
    required: true
  }],
  sprite: {
    type: String
  },
  image: {
    type: String
  },
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    Sp_Attack: Number,
    Sp_Defense: Number,
    Speed: Number
  }
}, {
  timestamps: true
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;