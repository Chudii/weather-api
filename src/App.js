import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Hourly from './components/hourly';

const App = () => {
  const [weatherData, setWeatherData] = useState([])
  const [cityData, setCityData] = useState('Newark')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const weatherResult = await axios("https://api.openweathermap.org/data/3.0/onecall?lat=40.735&lon=-74.172&units=imperial&appid=65d04fbbdd2d88832927515ecaae77b7")

        const cityResult = await axios("http://api.openweathermap.org/geo/1.0/direct?q=Newark&limit=1&appid=65d04fbbdd2d88832927515ecaae77b7")

        console.log(weatherResult.data)
        console.log(cityResult.data)

        setWeatherData(weatherResult.data)
        setCityData(cityResult.data)
      } catch (err) {
        setIsError(true)
        console.log(err)
        setTimeout(() => setIsError(false), 4000)
      }
    }

    fetchData()
  }, [])

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
            <Hourly
              label={'6:00 AM'}
              temp={77}
            />
            <Hourly
              label={'9:00 AM'}
              temp={77}
            />
            <Hourly
              label={'12:00 PM'}
              temp={77}
            />
            <Hourly
              label={'3:00 PM'}
              temp={77}
            />
            <Hourly
              label={'6:00 PM'}
              temp={77}
            />
            <Hourly
              label={'9:00 PM'}
              temp={77}
            />
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
