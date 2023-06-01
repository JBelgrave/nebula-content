import './App.css';
import Animal from './components/Animal/Animal'

function App() {
  const json = `{
    "animals":[
        {
          "species": "Cat",
          "commonColors": "Grey, Black, White, Orange",
          "averageAge": "12 - 18 years"
        }, 
        {
          "species": "Dog",
          "commonColors": "Black, Brown, White",
          "averageAge": "10 - 13 years"
        },
        {
          "species": "Bird",
          "commonColors": "Many",
          "averageAge": "10 - 20 years"
        }
    ]
  }`
  const data = JSON.parse(json);
  return (
    <div className="App">
      <h1>Animals</h1>
      {data.animals.map(animal => {
        return <Animal species={animal.species} commonColors={animal.commonColors} averageAge={animal.averageAge}/>
      })}
    </div>
  );
}

export default App;
