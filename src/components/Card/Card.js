import { useContext } from 'react';
import css from './Card.module.css';
import AuthContext from './../../store/authContext';

function Card(props) {
  const ctx = useContext(AuthContext);
  // console.log('ctx ===', ctx);

  return (
    <div className={css.card}>
      {props.children}
      <h3>The name in context value is: {ctx.currentUser}</h3>
      <button onClick={ctx.logout}>Logout</button>
    </div>
  );
}
export default Card;
