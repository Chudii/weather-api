import { useState } from "react"

const Daily = ({ time, weather, tempHi, tempLo }) => {
    const [timestamp, setTimestamp] = useState({
        day: new Date(time * 1000).toLocaleString('default', { weekday: 'short' }).toUpperCase()
    })

    return (
        <div className="daily">
            <p>{timestamp.day}</p>
            <img />
            <h4>{tempHi}°|{tempLo}°</h4>
        </div>
    )
}

export default Daily