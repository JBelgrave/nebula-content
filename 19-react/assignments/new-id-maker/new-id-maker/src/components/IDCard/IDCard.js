import React from 'react';

const IDCard = ({ name, age, occupation, email }) => {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default IDCard;