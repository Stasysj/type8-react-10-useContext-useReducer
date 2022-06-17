import css from './Counter.module.css';
import { useReducer, useState } from 'react';
import Card from '../Card/Card';

const initCounterValue = { count: 0 };

function counterReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  if (action === '-') {
    return { count: state.count - 1 };
  }

  return { count: state.count + 1 };
}
// state.count++ === state.count = state.count + 1
function Counter() {
  // const [state, setValue] = useState({ count: 0 });

  const [state, dispatch] = useReducer(counterReducer, initCounterValue);

  function handleInc() {
    // setValue((prevValue) => prevValue + 1);
    dispatch('+');
  }
  function handleDec() {
    // setValue((prevValue) => prevValue - 1);
    dispatch('-');
  }

  return (
    <div>
      <h2 className={css.count}>{state.count}</h2>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Down</button>
      <Card />
    </div>
  );
}
export default Counter;
