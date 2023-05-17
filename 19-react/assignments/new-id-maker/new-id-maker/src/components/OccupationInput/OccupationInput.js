import React from 'react';

const OccupationInput = ({ value, onChange }) => {
  return (
    <label>
      Occupation:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default OccupationInput;