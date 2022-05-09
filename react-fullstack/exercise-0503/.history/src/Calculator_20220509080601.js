import React, { useReducer, useRef, useCallback, useMemo } from 'react';

function cal(state, action) {
  const a = useRef(0);
  const b = useRef(0);
  const ar = useRef();

  const num1 = a.current.target.value;
  const num2 = b.current.target.value;

  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 0;
  }
}
const Calculator = () => {
  const [result, setResult] = React.useReducer(cal, 0);
  const onClick = () => {
    setResult(ar.current.target.value);
  };
  return (
    <div>
      <input type="number" ref={a} />
      <select ref={ar}>
        <option value="+"></option>
        <option value="-"></option>
        <option value="*"></option>
        <option value="/"></option>
      </select>
      <input type="number" ref={b} />
      <button onClick={onClick}></button>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
