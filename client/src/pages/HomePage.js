import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function HomePage() {
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);

  useEffect(() => {
    // Fetch episodes from your API
    const fetchEpisodes = async () => {
      // const response = await fetch('your-api-endpoint/episodes');
      // const data = await response.json();
      // setEpisodes(data);
      // setFilteredEpisodes(data);
      
      // Placeholder data
      const placeholderData = [
        { id: 1, title: '1:23:45', description: 'Plant workers and firefighters put their lives on the line to control a catastrophic explosion at a Soviet nuclear power plant in 1986. An early-morning explosion at the nuclear power plant sends workers scrambling to assess the damage' },
        { id: 2, title: 'Please Remain Calm', description: 'With untold millions at risk, nuclear physicist Ulana Khomyuk makes a desperate attempt to reach Valery Legasov, a leading Soviet nuclear physicist, and warn him about the threat of a second explosion that could devastate the continent.' },
        { id: 3, title: 'Open Wide, O Earth', description: 'Valery Legasov lays out a detailed decontamination plan that risks many human lives; Lyudmilla Ignatenko ignores deadly and dangerous warnings about her firefighter husbands contamination, which puts her in the firing line.'},
        { id: 4, title: 'The Happiness of All Mankind', description: 'Valery Legasov and Boris Shcherbina contemplate whether to try and detect radioactive debris with lunar rovers; Ulana Khomyuk experiences push back from the government, while trying to discover the source of the explosion.'},
        { id: 5, title: 'Vichnaya Pamyat', description: 'Valery Legasov, Boris Shcherbina and Ulana Khomyuk risk their lives and reputations to expose the truth about Chernobyl.'}
      ];
      setEpisodes(placeholderData);
      setFilteredEpisodes(placeholderData);
    };

    fetchEpisodes();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = episodes.filter(episode => 
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEpisodes(filtered);
  };

  return (
    <div className="home-page">
      <img 
        src="https://blogs.egu.eu/geolog/files/2023/08/Chernobyl-blog-2-700x400.jpg" 
        alt="Chernobyl TV Series Cover" 
        style={{ width: '75%', height: 'auto', marginBottom: '20px' }}
      />
      <h1>Chernobyl (2019 TV Mini Series)</h1>
      <p>In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line to save Europe.</p>
      <SearchBar onSearch={handleSearch} />
      <h2>Episodes</h2>
      <ul>
        {filteredEpisodes.map(episode => (
          <li key={episode.id}>
            <Link to={`/episode/${episode.id}`}>{episode.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;