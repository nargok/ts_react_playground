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

  const inputRef = useRef<HTMLInputElement>(null!); // nonNull Assertion operator 方法その3 TSにその状態を使用する時にnullじゃないことを伝える
  const focusInput = () => {
    // const current = inputRef.current;
    // if (current != null) current.focus(); // 方法その1

    // inputRef.current?.focus(); // 方法その2

    inputRef.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Click me</button>
    </div>
  );
};

export default Counter;
