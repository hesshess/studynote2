import React, { useReducer, useRef, useCallback, useMemo } from 'react';

function Cal(state, action) {
  const a = useRef(0);
  const b = useRef(0);
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
  const a = useRef(0);
  const b = useRef(0);
  const ar = useRef();
  const num1 = a.current.target.value;
  const num2 = b.current.target.value;
  const [result, setResult] = React.useReducer(Cal, 0);
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
      <button onClick={onClick}>계산</button>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
