import { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../styles/searchBar.css";

const SearchBar = ({ setResults, API, search, setSearch, setCityData, setWeatherData }) => {

    const fetchSubmitData = async () => {
        try {
          const city = await axios(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${API}`)
    
          let lat = city.data[0].lat
          let lon = city.data[0].lon
    
          setCityData(city.data)
    
          const weather = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API}`)
    
          setWeatherData(weather.data)
        } catch (err) {
          console.log(err)
        }
      }

    const fetchData = async (value) => {
        if (value) {
            try {
                const city = await axios(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API}`)

                setResults(city)
            } catch (err) {
                console.log(err)
            }
        } else {
            setResults([])
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        fetchData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchSubmitData()
        setSearch("")
    }

    return (
        <div className="searchbar">
            <form>
                <input
                    type='text'
                    value={search}
                    onChange={handleSearch}
                    placeholder='Search for City...'
                />

                <button 
                    type='submit'
                    onClick={handleSubmit}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                </button>
            </form>
        </div>
    )
}

export default SearchBar