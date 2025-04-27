import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';


// Import des routes
import pokemonRoutes from './routes/pokemonRoutes.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';

// Connexion à MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.resolve('./assets')));

// Routes
app.use('/api/pokemons', pokemonRoutes);
app.use('/api/users', authRoutes); // pour que /api/users/register fonctionne
app.use('/api/posts', postRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API Pokédex avec MongoDB et Auth JWT');
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});