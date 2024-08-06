
import React, {useState} from "react";

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calBmi = (event) => {
    event.preventDefault();
    if(weight === 0 || height === 0){
      alert("please enter a valid weight and height")
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You are underweight")
      }
      else if(bmi>=25 && bmi < 30){
        setMessage("You are healthy weight")
      }
      else{
        setMessage("You are overweight")
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return(
    <>
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calBmi}>
        <div>
          <label>Weight (lbs)</label>
          <input type="text" placeholder="Enter weight value" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Height (in)</label>
          <input type="text" placeholder="Enter height value" value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div>

        <div>
          <button className="btn" type="submit">Submit</button><br></br>
          <button className="btn btn-reload" onClick={reload} type="submit">Reload</button>
        </div>

      </form>
      <div className="output">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
      </div>
    </div>
    </>
  )
}

export default App
