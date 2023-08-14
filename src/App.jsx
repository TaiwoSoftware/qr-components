import React, {useState} from 'react';

function App() {
  let count = 0;
  const [counter, updateCount] = useState(count);

  function increaseCounter() {
    updateCount(counter + 1);
  }

  function decrementCounter() {
    updateCount(counter - 1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increaseCounter} >Increase</button>
      <button onClick={decrementCounter}>Decrease</button>
    </>
  )
}

export default App
