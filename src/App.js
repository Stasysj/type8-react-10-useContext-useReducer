import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Login />
      <Counter />
    </div>
  );
}

export default App;
