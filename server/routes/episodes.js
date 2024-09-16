const express = require('express');
const router = express.Router();
const { Episode } = require('../models');

// Get all episodes
router.get('/', async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch episodes' });
  }
});

// Get episode by ID
router.get('/:id', async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id);
    if (!episode) {
      return res.status(404).json({ error: 'Episode not found' });
    }
    res.json(episode);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch episode' });
  }
});

module.exports = router;