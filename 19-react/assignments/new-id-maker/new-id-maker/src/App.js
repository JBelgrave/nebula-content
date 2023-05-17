import './App.css';
import React, { useState } from 'react';
import NameInput from './components/NameInput/NameInput';
import AgeInput from './components/AgeInput/AgeInput';
import OccupationInput from './components/OccupationInput/OccupationInput';
import EmailInput from './components/EmailInput/EmailInput';
import IDCard from './components/IDCard/IDCard';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [idCards, setIdCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { name, age, occupation, email };
    setIdCards([...idCards, newCard]);
    setName('');
    setAge('');
    setOccupation('');
    setEmail('');
  };


  return (
    <div>
      <h1>ID Card Generator</h1>
      <form onSubmit={handleSubmit}>
        <NameInput value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <AgeInput value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <OccupationInput value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        <br />
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Generate!</button>
      </form>

      <div>
        {idCards.map((card, index) => (
          <IDCard
            key={index}
            name={card.name}
            age={card.age}
            occupation={card.occupation}
            email={card.email}
          />
        ))}
      </div>
    </div>
  );
};

export default App;