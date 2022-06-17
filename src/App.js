import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login';
import Navigation from './components/Navigation/Navigation';
import AuthContext from './store/authContext';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // paduoti isLoggedIn i contexta
  // pasiimti ctx Navigation
  // priklausomai ar trua ar false rodom login arba logout
  // jei submitinam forma tai pakeisti isLoggedIn state i true

  function login() {
    // ar sutampa email ir password
    setIsLoggedIn(true);
  }

  const ctx = {
    userName: 'James Smith',
    login,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={ctx}>
      <div className='App'>
        <Navigation />
        <Login />
        <Counter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
