// models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  pokemonName: {
    type: String,
    required: true
  },
  pokemonId: {
    type: Number,
    required: true
  },
  pokemonImage: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true // Crée automatiquement createdAt et updatedAt
});

const Post = mongoose.model('Post', postSchema);

export default Post;
