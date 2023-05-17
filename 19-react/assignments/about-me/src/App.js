import './App.css';
import Name from './components/Name/Name';
import Goals1 from './components/Goals/Goals1';
import Goals2 from './components/Goals/Goals2';
import Goals3 from './components/Goals/Goals3';
import Hobbies1 from './components/Hobbies/Hobbies1';
import Hobbies2 from './components/Hobbies/Hobbies2';
import Hobbies3 from './components/Hobbies/Hobbies3';

export default function App() {
  const [values, setValues] = useState ({
    fName: "reed",
    hobby1: "hiking",
    age: "1"
  })
  const handleOnChange = (e) => {
    setValues({
      fName
    })
  }
  return (
    <div className="App">
      <h1>Hi, my name is {fName} and I'm {age} years old</h1>

      <div class="name">
        <Name/>
      </div>

      <div class="hobbies">
        <ul>
          <li><Hobbies1/></li>
          <li><Hobbies2/></li>
          <li><Hobbies3/></li>
        </ul>
      </div>

      <div class="goals">
        <ul>
          <li><Goals1/></li>
          <li><Goals2/></li>
          <li><Goals3/></li>
        </ul>
      </div>
      
      <input type='submit'/>
    </div>
  );
}