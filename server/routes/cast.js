const express = require('express');
const router = express.Router();
const { CastMember } = require('../models');

// Get all cast members
router.get('/', async (req, res) => {
  try {
    const cast = await CastMember.find();
    res.json(cast);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cast members' });
  }
});

module.exports = router;