import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import FavoriteColorInput from './components/FavoriteColorInput/FavoriteColorInput';

function App() {
  return (
    <div className="App">
      <h1>This is my React App!</h1>
      <Counter/>
      <FavoriteColorInput/>
    </div>
  );
}
export default App;