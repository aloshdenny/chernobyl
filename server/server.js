const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://chernobyl.vercel.app' 
    : 'http://localhost:3000'
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
const episodesRouter = require('./routes/episodes');
const castRouter = require('./routes/cast');

app.use('/api/episodes', episodesRouter);
app.use('/api/cast', castRouter);

app.get('/', (req, res) => {
  res.send('TV Show API is running');
});

// Remove app.listen() for Vercel deployment
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Export the Express API
module.exports = app;