import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Daily from './components/daily';

const App = () => {
  const [search, setSearch] = useState({})
  const [weatherData, setWeatherData] = useState([])
  const [cityData, setCityData] = useState('Newark')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

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

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fetchData = async () => {
      try {
        const city = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=65d04fbbdd2d88832927515ecaae77b7`)

        console.log(city.data)

        let lat = city.data[0].lat
        let lon = city.data[0].lon

        setCityData(city.data)

        const weather = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=65d04fbbdd2d88832927515ecaae77b7`)

        console.log(weather.data)

        setWeatherData(weather.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
        setTimeout(() => setIsError(false), 4000)
      }
    }

    fetchData()
  }

  return (
    <div className="App">
      <div className='current-day'>
        <form>
          <input
            type='text'
            onChange={handleSearch}
            placeholder='Search for City...'
          />

          <button 
            type='submit'
            onClick={handleSubmit}
          >Search</button>
        </form>

        <div className='city'>
          <div>
            <h2>{cityData[0].name}</h2>
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
