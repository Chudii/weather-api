import { useState } from "react"
import SearchResults from "./searchResults"
import "../styles/searchBar.css"

const SearchBar = ({ setCityData, setWeatherData }) => {
    const [search, setSearch] = useState("")

    const fetchSubmitData = async () => {
        try {
            const city = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=65d04fbbdd2d88832927515ecaae77b7`)

            console.log(city.data)

            let lat = city.data[0].lat
            let lon = city.data[0].lon

            setCityData(city.data)

            const weather = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=65d04fbbdd2d88832927515ecaae77b7`)

            console.log(weather.data)

            setWeatherData(weather.data)
        } catch (err) {
            console.log(err)
        }
    }

    const fetchData = async (value) => {
        try {
            const city = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=65d04fbbdd2d88832927515ecaae77b7`)

            console.log(city.data)

            let lat = city.data[0].lat
            let lon = city.data[0].lon

            setCityData(city.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        fetchData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchSubmitData()
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
                    Search
                </button>

                <SearchResults results={search}/>
            </form>
        </div>
    )
}

export default SearchBar