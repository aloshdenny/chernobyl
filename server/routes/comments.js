const express = require('express');
const router = express.Router();
const { Comment } = require('../models');

// Add comment to an episode
router.post('/', async (req, res) => {
  try {
    const { episodeId, text, author } = req.body;
    const comment = new Comment({ episodeId, text, author });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

// Get comments for an episode
router.get('/:episodeId', async (req, res) => {
  try {
    const comments = await Comment.find({ episodeId: req.params.episodeId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

module.exports = router;