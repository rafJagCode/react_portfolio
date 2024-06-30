import { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((state) => state + 1);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
