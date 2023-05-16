import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {/* <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me
      </button> */}
    </div>
  );
}