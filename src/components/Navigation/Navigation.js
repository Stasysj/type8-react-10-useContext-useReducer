import css from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={css.nav}>
      <a href='#'>Home</a>
      <a href='#'>Login</a>
      <a href='#'>Logout</a>
    </nav>
  );
}
export default Navigation;
