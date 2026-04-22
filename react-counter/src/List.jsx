
import React, { useState } from 'react';

const List = () => {
        const [numbers, setNumbers] = useState([1, 2, 3]);


  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  
  const total = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Numbers List</h2>

    
      {numbers.map((num, index) => (
        <p key={index}>{num}</p>
      ))}

      <button onClick={addNumber}>Add Number</button>

      <h3>Total: {total}</h3>
    </div>
  );
}

export default List