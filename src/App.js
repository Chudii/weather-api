import { useEffect, useState } from 'react';
import axios from 'axios';
import Daily from './components/daily';
import Icon from './components/icon';
import SearchResults from './components/searchResults';
import './styles/index.css'
import SearchBar from './components/searchBar'

const App = () => {
  const API = process.env.REACT_APP_API_KEY
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [cityData, setCityData] = useState('Newark')
  const [timestamp, setTimestamp] = useState({
    day: new Date().toLocaleString('default', { weekday: 'long' }),
    month: new Date().toLocaleString('default', { month: 'long' }),
    dayOfMonth: new Date().getDate()
  })
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResult = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=40.735&lon=-74.172&units=imperial&appid=${API}`)

        const cityResult = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=Newark,NJ,US&limit=1&appid=${API}`)

        console.log(weatherResult.data)
        console.log(cityResult.data)

        setWeatherData(weatherResult.data)
        setCityData(cityResult.data[0])
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <div>
        <SearchBar
          API={API}
          search={search}
          setSearch={setSearch}
          setResults={setResults}
          setCityData={setCityData}
          setWeatherData={setWeatherData}
        />

        <SearchResults
          API={API}
          results={results.data}
          setResults={setResults}
          setSearch={setSearch}
          setCityData={setCityData}
          setWeatherData={setWeatherData}
        />
      </div>

      <div className='current-day'>
        {
          weatherData.current &&
          <div>
            <div>
              <h2>{cityData.name}</h2>
              <h3>{cityData.state}</h3>
            </div>
            
            <div>
              <p>
                {`${timestamp.day}, ${timestamp.month} ${timestamp.dayOfMonth}`}
              </p>
            </div>
            <div>
              <h1>{Math.round(weatherData.current.temp)}°</h1>
              <Icon 
                weather={weatherData.current.weather[0].main}
                currentTime={weatherData.current.dt}
                sunrise={weatherData.current.sunrise}
                sunset={weatherData.current.sunset}
              />
            </div>  
            
            <p>Winds: {Math.round(weatherData.current.wind_speed)} mph</p>
            <p>Precipitation: {weatherData.daily[0].pop * 100}%</p>
            <p>Humidty: {weatherData.current.humidity}%</p>
          </div>
        }  
      </div>
      
      <div>
        -------------------------------
      </div>

      <div className='week'>
        {
          weatherData.daily &&
          weatherData.daily.slice(1).map((x, i) => {
            return (
              <Daily
                key={i}
                weather={weatherData.daily[i+1].weather[0].main}
                time={weatherData.daily[i+1].dt}
                tempHi={weatherData.daily[i+1].temp.max}
                tempLo={weatherData.daily[i+1].temp.min}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
