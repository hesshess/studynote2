import React, { useReducer, useRef, useCallback, useMemo } from 'react';

function Cal(state, action) {
  console.log('[%o] %o', action, state);
  const a = useRef(0);
  const b = useRef(0);
  const num1 = a.current.target.value;
  const num2 = b.current.target.value;

  switch (action) {
    case '+':
      return (state = num1 + num2);
    case '-':
      return (state = num1 - num2);
    case '*':
      return (state = num1 * num2);
    case '/':
      return (state = num1 / num2);
    default:
      return 0;
  }
}
const Calculator = () => {
  const a = useRef(0);
  const b = useRef(0);
  const ar = useRef();
  console.log(ar.current[ar.current.selectedIndex].value);

  const [result, setResult] = useReducer(Cal, 0);
  const onClick = () => {
    setResult('+');
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
