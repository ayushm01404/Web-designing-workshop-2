import React, { useState } from 'react';
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h2>REACT COUNTER APPLICATION</h2>

        <h1>{count}</h1>

        <div className="buttons">
          <button onClick={() => setCount(prev => prev + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(prev => prev - 1)}>
            Decrement
          </button>
        </div>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;