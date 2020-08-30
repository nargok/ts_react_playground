import React, { useEffect, useState, useRef } from "react";

const Counter: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((previousState) => previousState + 1);
    // setValue(value + 1);
  };

  const decrement = () => {
    setValue((previousState) => previousState - 1);
    // setValue(value - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
    </div>
  );
};

export default Counter;
