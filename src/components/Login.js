// import css from 'Login.module.css';

function Login({}) {
  function handleLogin(e) {
    e.preventDefault();
    console.log('react is in control');
  }

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
