
function App() {
  return(
    <>
    <div className="container">
      <h2>BMI Calculator</h2>
      <form>
        <div>
          <label>Weight (ibs)</label>
          <input type="text" placeholder="Enter weight value" value={weight}/>
        </div>
        <div>
          <label>Height (in)</label>
          <input type="text" placeholder="Enter height value" value={height}/>
        </div>

        <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-reload" onClick={reload} type="submit">Reload</button>
        </div>

        <div className="output">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
