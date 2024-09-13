const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { Episode, Comment } = require('../models');

// Get all episodes
router.get('/', async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single episode
router.get('/:id', async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id);
    if (!episode) return res.status(404).json({ message: 'Episode not found' });
    res.json(episode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get comments for an episode
router.get('/:id/comments', async (req, res) => {
  try {
    const comments = await Comment.find({ episodeId: req.params.id });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a comment to an episode
router.post('/:id/comments', async (req, res) => {
  const comment = new Comment({
    episodeId: req.params.id,
    text: req.body.text,
    author: req.body.author
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ... (keep your existing routes)

// Search for a TV show and fetch its episodes
router.get('/search/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const apiKey = process.env.OMDB_API_KEY;

    // First, search for the TV show
    const searchResponse = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}&type=series`);
    const showData = await searchResponse.json();

    if (showData.Response === 'False') {
      return res.status(404).json({ message: 'TV show not found' });
    }

    const imdbID = showData.imdbID;
    const totalSeasons = parseInt(showData.totalSeasons);

    let allEpisodes = [];

    // Fetch episodes for each season
    for (let season = 1; season <= totalSeasons; season++) {
      const seasonResponse = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&Season=${season}`);
      const seasonData = await seasonResponse.json();

      if (seasonData.Episodes) {
        allEpisodes = allEpisodes.concat(seasonData.Episodes.map(episode => ({
          title: episode.Title,
          description: `Episode ${episode.Episode} of Season ${season}`,
          airDate: new Date(episode.Released),
          seasonNumber: season,
          episodeNumber: parseInt(episode.Episode),
          imdbID: episode.imdbID
        })));
      }
    }

    // Save episodes to database
    await Episode.insertMany(allEpisodes, { ordered: false });

    res.json({ 
      show: showData,
      episodesCount: allEpisodes.length,
      message: 'Episodes fetched and saved successfully'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;