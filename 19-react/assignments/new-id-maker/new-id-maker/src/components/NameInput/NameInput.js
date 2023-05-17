import React from 'react';

const NameInput = ({ value, onChange }) => {
  return (
    <label>
      Name:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default NameInput;
