import './App.css';
import Name from './components/Name/Name';
import Goals1 from './components/Goals/Goals1';
import Goals2 from './components/Goals/Goals2';
import Goals3 from './components/Goals/Goals3';
import Hobbies1 from './components/Hobbies/Hobbies1';
import Hobbies2 from './components/Hobbies/Hobbies2';
import Hobbies3 from './components/Hobbies/Hobbies3';

export default function App() {
  return (
    <div className="App">
      <h1>About Me!</h1>

      <div class="name">
        <Name/>
      </div>

      <div class="goals">
        <Goals1/>
        <Goals2/>
        <Goals3/>
      </div>

      <div class="hobbies">
        <Hobbies1/>
        <Hobbies2/>
        <Hobbies3/>
      </div>
      
      <input type='submit'/>
    </div>
  );
}