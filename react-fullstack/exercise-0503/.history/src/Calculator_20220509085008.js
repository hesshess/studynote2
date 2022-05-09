import React, { useReducer, useRef, useCallback, useMemo } from 'react';

function Cal(state, action) {
  let result = 0;
  switch (action.operator) {
    case '+':
      result = action.num1 + action.num2;
      break;
    case '-':
      result = action.num1 - action.num2;
      break;
    case '*':
      result = action.num1 * action.num2;
      break;
    case '/':
      result = action.num1 / action.num2;
      break;
    default:
      result = 0;
  }
  return result;
}
const Calculator = () => {
  const a = useRef(0);
  const b = useRef(0);
  const ar = useRef();

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
        <button type="button" onClick={onClick}>
          계산
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
