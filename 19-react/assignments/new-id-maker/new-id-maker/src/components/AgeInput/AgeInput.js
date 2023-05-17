import React from 'react';

const AgeInput = ({ value, onChange }) => {
  return (
    <label>
      Age:
      <input type="number" value={value} onChange={onChange} />
    </label>
  );
};

export default AgeInput;
