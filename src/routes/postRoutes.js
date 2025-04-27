// /routes/postRoutes.js

import express from 'express';
import Post from '../models/Post.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router = express.Router();

// Récupérer tous les posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // triés du plus récent au plus ancien
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// Créer un nouveau post
router.post('/', async (req, res) => {
  const { userName, pokemonName, pokemonId, pokemonImage, message } = req.body;
  try {
    const newPost = new Post({ userName, pokemonName, pokemonId, pokemonImage, message });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du post', error: error.message });
  }
});

// Liker un post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors du like', error: error.message });
  }
});

// Disliker un post
router.put('/:id/dislike', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.dislikes += 1;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors du dislike', error: error.message });
  }
});

// Supprimer un post
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: error.message });
  }
});

export default router;
