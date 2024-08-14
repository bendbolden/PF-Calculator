import './App.css'

import { useState } from 'react'

//TODO:Create Input Fields - DONE
//TODO:Calculate and outout PF - DONE
//TODO:Work on CSS

//LONGTERM GOALS: Add drop downs for disciplines and color coding for proximity to PF limits.




function PowerFactorCalc() {


  const [avgFPS, setAvgFPS] = useState();

  const handleFPSInputChange = (event) => {
    setAvgFPS(event.target.value);
  };

  const [bulletWeight, setBulletWeight] = useState();

  const handleWeightInputChange = (event) => {
    setBulletWeight(event.target.value);
  };

  function calculatePF() {
    return (avgFPS * bulletWeight /1000)
  }

  return (
    <div>
      <div class="columns">
        <div class="column is-one-third">
      <div class="box">
        Enter your avereage FPS: <input
          className="inputFPS"
          class="input is-medium"
          type="number"
          value={avgFPS}
          onChange={handleFPSInputChange}
          placeholder="Average Feet Per Second"></input>
        Enter your bullet weight: <input
          className="inputWeight"
          class="input is-medium"
          type="number"
           value={bulletWeight}
           onChange={handleWeightInputChange}

          placeholder="Bullet Weight"></input>
      </div>
      <div class='column'>Placeholder for dropdowns</div>
      </div>
      <div class="column">
      <div class="box">Captured FPS is: {avgFPS}</div>
      <div class="box">Captured Bullet Weight is: {bulletWeight}</div>
      <div class="box">Power Factor is: {Math.ceil(calculatePF())}</div>
        </div>
      </div>

    </div>

  );
}





function App() {

  return (
    <div>
      <div>{PowerFactorCalc()}</div>
    </div>
  )
}

export default App
