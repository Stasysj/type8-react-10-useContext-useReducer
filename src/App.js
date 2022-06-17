import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login';
import Navigation from './components/Navigation/Navigation';
import AuthContext from './store/authContext';

function App() {
  return (
    <AuthContext.Provider value={'James bond'}>
      <div className='App'>
        <Navigation />
        <Login />
        <Counter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
