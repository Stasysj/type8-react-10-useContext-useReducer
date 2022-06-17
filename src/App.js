import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login';
import Navigation from './components/Navigation/Navigation';
import AuthContext from './store/authContext';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // paduoti isLoggedIn i contexta
  // pasiimti ctx Navigation
  // priklausomai ar trua ar false rodom login arba logout
  const ctx = {
    userName: 'James Smith',
    age: 36,
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
