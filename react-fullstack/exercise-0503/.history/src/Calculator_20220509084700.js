import React, { useReducer, useRef, useCallback, useMemo } from 'react';

function Cal(state, action) {
  switch (action.ar) {
    case '+':
      state = action.num1 + action.num2;
      break;
    case '-':
      state = action.num1 - action.num2;
      break;
    case '*':
      state = action.num1 * action.num2;
      break;
    case '/':
      state = action.num1 / action.num2;
      break;
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
      num1: Number(a.current.value),
      num2: Number(b.current.value),
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
