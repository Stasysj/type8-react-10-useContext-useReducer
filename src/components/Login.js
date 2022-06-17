// import css from 'Login.module.css';
import AuthContext from './../store/authContext';
import { useContext } from 'react';

function Login() {
  const ctx = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();
    console.log('react is in control');
    ctx.login();
  }

  if (ctx.isLoggedIn) return <h2>Prisiloginai Sveikinmai</h2>;

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
export default Login;
