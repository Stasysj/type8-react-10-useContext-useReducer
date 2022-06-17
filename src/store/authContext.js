import { createContext } from 'react';

// const AuthContext = React.createContext()

// sukuriam kontext
// argumentai tik autocompletui
const AuthContext = createContext({
  user: '',
  login: () => {},
  logut: () => {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
