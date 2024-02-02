import React, { useCallback, useEffect, useRef, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
    const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current++
  });

  return (
    <div className="">
      <h1>{count}</h1>
      <h1>{renderCount.current}</h1>
      <button onClick={() => setCount(count + 1)}> Нажми меня</button>
    </div>
  );
};

export default UseEffect;
