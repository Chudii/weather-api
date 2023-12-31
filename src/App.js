import { useEffect, useState } from 'react';
import axios from 'axios';
import Daily from './components/daily';
import Icon from './components/icon';
import SearchResults from './components/searchResults';
import Footer from './components/footer';
import './styles/index.css'
import './styles/searchBar.css'
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherResult = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=40.735&lon=-74.172&units=imperial&appid=${API}`)

        const cityResult = await axios(`https://api.openweathermap.org/geo/1.0/direct?q=Newark,NJ,US&limit=1&appid=${API}`)

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
      <div className='search-container'>
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

      <div className='info'>
        <div className='current-day'>
          {
            weatherData.current &&
            <div>
              <div className='city-label'>
                <h2 className='city-name'>{cityData.name}</h2>
                <h3 className='city-state'>{cityData.state.toUpperCase()}</h3>
              </div>
              
              <div className='calendar'>
                <p>
                  {`${timestamp.day}, ${timestamp.month} ${timestamp.dayOfMonth}`}
                </p>
              </div>

              <div className='current-weather'>
                <h1 id='current-temp'>{Math.round(weatherData.current.temp)} °</h1>
                <Icon 
                  weather={weatherData.current.weather[0].main}
                  currentTime={weatherData.current.dt}
                  sunrise={weatherData.current.sunrise}
                  sunset={weatherData.current.sunset}
                />

                <p>Winds: {Math.round(weatherData.current.wind_speed)} mph</p>
                <p>Precipitation: {weatherData.daily[0].pop * 100}%</p>
                <p>Humidty: {weatherData.current.humidity}%</p>
              </div>  
              
              
            </div>
          }  
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

      

      <Footer />
    </div>
  );
}

export default App;
