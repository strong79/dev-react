import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count - 1);

  return { count, increment, decrement};
}

export default useCounter;
//this is custom hook