const express = require('express');
const router = express.Router();
const { CastMember } = require('../models');

// Get all cast members
router.get('/', async (req, res) => {
  try {
    const castMembers = await CastMember.find();
    res.json(castMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;