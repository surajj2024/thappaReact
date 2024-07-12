import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(0);
  const increaseValue = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increaseValue();
        }}
      >
        Increment
      </button>
    </>
  );
};

export default State;
