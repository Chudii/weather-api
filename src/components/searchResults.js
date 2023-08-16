import axios from "axios";
import "../styles/searchResults.css";

const SearchResults = ({ results, setResults, setSearch, setCityData, setWeatherData, API }) => {

    const fetchSearchData = async (i) => {
        try {
            setCityData(results[i])

            let lon = results[i].lon
            let lat = results[i].lat

            const weather = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API}`)

            console.log(weather.data)
            setWeatherData(weather.data)
        } catch (err) {
            console.log(err)
        }
    }
    
    const handleSubmit = (e, i) => {
        fetchSearchData(i)
        setSearch("")
        setResults([])
    }



    return (
        <div className="search-results">
            {
                results && 
                results.map((result, i) => {
                    return (
                        <div 
                            key={i}
                            onClick={(e) => handleSubmit(e, i)}
                        >
                            {result.name}, {result.state}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchResults