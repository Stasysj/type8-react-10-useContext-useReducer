import css from './Counter.module.css';
import { useState } from 'react';
import Card from '../Card/Card';

function Counter() {
  const [value, setValue] = useState(0);

  function handleInc() {
    setValue((prevValue) => prevValue + 1);
  }

  return (
    <div>
      <h2 className={css.count}>{value}</h2>
      <button onClick={handleInc}>Increase</button>
      <Card />
    </div>
  );
}
export default Counter;
