import { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([])

  return (
    <div className="App">
      <form>
        <input
          placeholder='Search for City...'
        />

        <button>Search</button>
      </form>
      
      <div className='day'>
        <div className='city'>
          <div>
            <h2>Newark</h2>
            <p>Chance of rain: 0%</p>
            <h1>77°</h1>
          </div>
          <img />
        </div>
        <div className='day-forecast'>
          <p>TODAY'S FORECAST</p>
          <div className='day-times'>
            
          </div>
        </div>
        <div className='air-conditions'>

        </div>
      </div>

      <div className='week'>

      </div>
    </div>
  );
}

export default App;
