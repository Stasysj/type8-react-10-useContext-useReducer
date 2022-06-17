import css from './Counter.module.css';
import { useReducer, useState } from 'react';
import Card from '../Card/Card';

const initCounterValue = { count: 0 };

function counterReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  switch (action.type) {
    case 'INCR':
      return { count: state.count + 1 };
    case 'UPBY':
      return { count: state.count + action.payload };
    case 'DECR':
      return { count: state.count - 1 };
    case 'DOWN5':
      return { count: state.count - 5 };
    default:
      throw new Error('neatpazintas type');
  }
}
// state.count++ === state.count = state.count + 1
function Counter() {
  // const [state, setValue] = useState({ count: 0 });

  const [state, dispatch] = useReducer(counterReducer, initCounterValue);

  function handleInc() {
    // setValue((prevValue) => prevValue + 1);
    dispatch({ type: 'INCR' });
  }
  function handleDec() {
    // setValue((prevValue) => prevValue - 1);
    dispatch({ type: 'DECR' });
  }

  // TODO: padaryti reset

  return (
    <div>
      <h2 className={css.count}>{state.count}</h2>
      <button onClick={() => dispatch({ type: 'UPBY', payload: 7 })}>Up by 7</button>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Down</button>
      <button onClick={() => dispatch({ type: 'DOWN5' })}>down 5</button>
      <Card />
    </div>
  );
}
export default Counter;
