import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

// Import des routes
import pokemonRoutes from './routes/pokemonRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Connexion à MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pokemons', pokemonRoutes);
app.use('/api', authRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API Pokédex avec MongoDB et Auth JWT');
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});