import React, { useEffect, useRef, useState } from 'react';

const Ref = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);  // useRef to store previous count value


  useEffect(() => {
    // Store the current count value into the ref after every render
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Ref
