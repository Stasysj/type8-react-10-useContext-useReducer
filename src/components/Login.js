// import css from 'Login.module.css';
import AuthContext from './../store/authContext';
import { useContext, useRef } from 'react';
import { useReducer } from 'react';

const initValues = {
  username: '',
  password: '',
  usernameErr: '',
  passwordErr: '',
};
function loginReducerFn(state, action) {
  switch (action.type) {
    case 'password':
      return { ...state, password: action.payload };
    case 'username':
      return { ...state, username: action.payload };

    default:
      throw new Error('klaida');
  }
}

function Login() {
  // TODO: Login abu inputus valdom su vienu useReducer state
  const [state, dispatch] = useReducer(loginReducerFn, initValues);
  const ctx = useContext(AuthContext);

  const userNameRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    console.log('react is in control');
    const name = userNameRef.current.value;
    // console.log('name ===', name);
    ctx.login(name);
  }

  if (ctx.isLoggedIn) return <h2>Prisiloginai Sveikinmai</h2>;

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
          ref={userNameRef}
          type='text'
          placeholder='username'
          value={state.username}
        />
        <input
          onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
          type='password'
          placeholder='password'
          value={state.password}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
export default Login;
