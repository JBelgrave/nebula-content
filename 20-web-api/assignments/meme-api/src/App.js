import './App.css'
import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => {
        setMemes(data.data.memes);
        setFilteredMemes(data.data.memes);
      })
  }, []);

  return (
    <div>
      <SearchBar memes={memes} setFilteredMemes={setFilteredMemes} />
      <div className="memes-container">
        {filteredMemes.map(meme => (
          <div key={meme.id} className="meme-card">
            <img src={meme.url} alt={meme.name} />
            <div className="meme-name">{meme.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
