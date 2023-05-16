import React from 'react';
let count = 0

export default function DisplayCounter(props) {
  const {count} = props

  return (
      <p>You clicked {count} times</p>
  );
}