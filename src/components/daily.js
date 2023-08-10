import { useState } from "react"

const Daily = ({ time, weather, tempHi, tempLo }) => {
    const [timestamp, setTimestamp] = useState({
        day: new Date(time * 1000).toLocaleString('default', { weekday: 'short' }).toUpperCase(),
        month: new Date(time * 1000).getMonth() + 1,
        dayOfMonth: new Date(time * 1000).getDate()
    })

    return (
        <div className="daily">
            <div>
                <p>{timestamp.day}</p>
                <p>{timestamp.month}/{timestamp.dayOfMonth}</p>
            </div>
            
            <img />
            <h4>{tempHi}°|{tempLo}°</h4>
        </div>
    )
}

export default Daily