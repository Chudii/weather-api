import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Daily from './components/daily';

const App = () => {
  const [search, setSearch] = useState({})
  const [weatherData, setWeatherData] = useState([])
  const [cityData, setCityData] = useState('Newark')
  const [timestamp, setTimestamp] = useState({
    day: new Date().toLocaleString('default', { weekday: 'long' }),
    month: new Date().toLocaleString('default', { month: 'long' }),
    dayOfMonth: new Date().getDate()
  })
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
          {
            weatherData.current && 
            <div>
              <h2>{cityData[0].name}</h2>
              <div>
                <p>
                  {`${timestamp.day}, ${timestamp.month} `}
                  {
                    timestamp.dayOfMonth > 2
                      ? `${timestamp.dayOfMonth}th`
                      : timestamp.dayOfMonth == 2
                        ? `${timestamp.dayOfMonth}nd`
                        : `${timestamp.dayOfMonth}st`
                  }
                </p>
              </div>
              <div>
                <h1>{Math.round(weatherData.current.temp)}°</h1>
                <img />
              </div>  
              
              <p>Winds: {Math.round(weatherData.current.wind_speed)} mph</p>
              <p>Precipitation: {weatherData.daily[0].pop * 100}%</p>
              <p>Humidty: {weatherData.current.humidity}%</p>
            </div>
          }  
        </div>
      </div>

      <div className='week'>
        {
          weatherData.daily &&
          <Daily
            time={weatherData.daily[1].dt}
            tempHi={weatherData.daily[1].temp.max}
            tempLo={weatherData.daily[1].temp.min}
          />
        }
      </div>
    </div>
  );
}

export default App;
