import { useState } from "react"
import Icon from "./icon"
import "../styles/daily.css"

const Daily = ({ time, weather, tempHi, tempLo }) => {
    const [timestamp, setTimestamp] = useState({
        day: new Date(time * 1000).toLocaleString('default', { weekday: 'short' }).toUpperCase(),
        month: new Date(time * 1000).getMonth() + 1,
        dayOfMonth: new Date(time * 1000).getDate()
    })

    return (
        <div className="daily">
            <div className="week-day">
                <p>{timestamp.day}</p>
                <p>{timestamp.month}/{timestamp.dayOfMonth}</p>
            </div>
            
            <Icon 
                weather={weather}
            />
            <p className="week-temp"><span>{Math.round(tempHi)}</span> {Math.round(tempLo)}</p>
        </div>
    )
}

export default Daily