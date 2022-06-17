import { createContext } from 'react';

// const AuthContext = React.createContext()

// sukuriam kontext
// argumentai tik autocompletui
const AuthContext = createContext({
  user: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = 'BubbleGum';

export default AuthContext;
