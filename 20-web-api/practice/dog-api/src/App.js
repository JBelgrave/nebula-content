import React, { useEffect, useState } from 'react';
import './App.css';
import DogCard from './components/DogCard/DogCard';
import Search from './components/Search/Search';

function App() {
  const [dogs, setDogs] = useState([]);
  const [options, setOptions] = useState([]);
  const [dropValue, setDropValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setDropValue(e.target.value); // <-- This line is new!
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
      .then(res => res.json())
      .then(res => setDogs(res.message))
  }

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/sheepdog/images`)
      .then(res => res.json())
      .then(res => setDogs(res.message))

    fetch(`https://dog.ceo/api/breeds/list/all`)
      .then(res => res.json())

      .then(res => {
        let arr = [];
        for (let key in res.message) {
          arr.push(key)
        }
        setOptions(arr)
      })
  }, [])

  return (
    <div className="App">
      <Search handleChange={handleChange} options={options} dropValue={dropValue}/>
      {dogs.map(dog => <DogCard key={dog} dog={dog} />)}
    </div>
  );
}

export default App;