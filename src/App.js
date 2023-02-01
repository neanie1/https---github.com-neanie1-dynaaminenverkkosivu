import './App.css';
import {useState} from "react"

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);


  function calculate(e) {
    e.preventDefault()
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0 
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7)   
    } else {
      result = gramsLeft / (weight * 0.6)
    }
    setResult(result);
  }

  return (
   <div>
    <h3>Calculating alcohol blood level</h3>

    <form onSubmit={calculate}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>

      <div>
        <label>Bottles</label>
        <input name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>

      <div>
        <label>Time</label>
        <input name="time" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
      </div>

      <div>
        <label>Gender</label>
        <input defaultChecked type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)}/>Male
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>Female
      </div>

      <div><output>{result.toFixed(2)}</output></div>
      <button>Calculate</button>


    </form>

   </div>


  );
}

export default App;
