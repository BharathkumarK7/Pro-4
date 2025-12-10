import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setcount] = useState(0)
  return  (
    <div>Counter
      <p>You Clicked {count} times</p>
      <button onClick={ () => setcount(count+1)}>Increment</button>
      <button onClick={() => setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter;