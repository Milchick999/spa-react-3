import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hi!</h1>
      <p>You've pressed the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default App;