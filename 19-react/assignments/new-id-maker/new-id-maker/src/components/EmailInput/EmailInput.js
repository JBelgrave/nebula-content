import React from 'react';

const EmailInput = ({ value, onChange }) => {
  return (
    <label>
      Email:
      <input type="email" value={value} onChange={onChange} />
    </label>
  );
};

export default EmailInput;
