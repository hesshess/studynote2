import React, { useReducer, useRef, useCallback, useMemo } from 'react';

function Cal(state, action) {
  switch (action.ar) {
    case '+':
      return (state = action.num1 + action.num2);
    case '-':
      return (state = action.num1 - action.num2);
    case '*':
      return (state = action.num1 * action.num2);
    case '/':
      return (state = action.num1 / action.num2);
    default:
      return 0;
  }
}
const Calculator = () => {
  const a = useRef(0);
  const b = useRef(0);
  const ar = useRef();
  console.log(ar);

  const [result, setResult] = useReducer(Cal, 0);
  const onClick = () => {
    setResult({
      num1: Number(num1.current.value),
      num2: Number(num2.current.value),
      operator: ar.current[ar.current.selectedIndex].value,
    });
  };
  return (
    <div>
      <form>
        <input type="number" ref={a} />
        <select ref={ar}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" ref={b} />
        <button onClick={onClick}>계산</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
