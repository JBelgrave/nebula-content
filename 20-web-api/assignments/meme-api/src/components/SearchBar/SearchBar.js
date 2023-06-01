import React, { useState } from 'react';

function SearchBar({ memes, setFilteredMemes }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredMemes = memes.filter(meme =>
      meme.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMemes(filteredMemes);
  };

  return (
    <div className="top-bar">
      <h1>Meme Search</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search memes" value={searchTerm} onChange={handleSearch}/>
      </div>
    </div>
  );
}

export default SearchBar;
