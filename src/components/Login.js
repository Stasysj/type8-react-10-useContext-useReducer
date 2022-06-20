// import css from 'Login.module.css';
import AuthContext from './../store/authContext';
import { useContext, useRef } from 'react';
import { useReducer } from 'react';

const initValues = {
  username: '',
  password: '',
  password1: '',
  usernameErr: '',
  passwordErr: '',
};
function loginReducerFn(state, action) {
  switch (action.type) {
    case 'password':
      if (state.username.length === 0)
        return { ...state, password: action.payload, usernameErr: 'Iveskite userName' };
      return { ...state, password: action.payload };
    case 'username':
      return { ...state, username: action.payload, usernameErr: '' };
    case 'usernameBlur':
      if (state.username.length === 0) {
        return { ...state, usernameErr: 'Iveskite userName' };
      }
      return state;
    case 'input':
      console.log(action.payload.name);
      console.log(action.payload.value);
      return { ...state, [action.payload.name]: action.payload.value };

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
        {state.usernameErr && <h3>{state.usernameErr}</h3>}

        <input
          onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
          onBlur={(e) => dispatch({ type: 'usernameBlur' })}
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
          name='password'
        />
        <input
          onChange={(e) => dispatch({ type: 'input', payload: e.target })}
          type='password'
          placeholder='password'
          value={state.password1}
          name='password1'
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
export default Login;
