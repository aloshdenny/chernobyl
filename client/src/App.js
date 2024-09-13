import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EpisodeDetailsPage from './pages/EpisodeDetailsPage';
import CastPage from './pages/CastPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episode/:id" element={<EpisodeDetailsPage />} />
          <Route path="/cast" element={<CastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;