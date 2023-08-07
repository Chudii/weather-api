import './App.css';

function App() {
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
          <div>
            
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
