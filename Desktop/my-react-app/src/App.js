import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React カウンター</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={handleClick}>カウント +1</button>
    </div>
  );
}

export default App;
