const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  airDate: { type: Date, required: true },
  seasonNumber: { type: Number, required: true },
  episodeNumber: { type: Number, required: true }
});

const CommentSchema = new mongoose.Schema({
  episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode', required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const CastMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  character: { type: String, required: true },
  bio: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Episode = mongoose.model('Episode', EpisodeSchema);
const Comment = mongoose.model('Comment', CommentSchema);
const CastMember = mongoose.model('CastMember', CastMemberSchema);

module.exports = {
  Episode,
  Comment,
  CastMember
};