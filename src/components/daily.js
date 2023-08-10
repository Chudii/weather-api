import { useState } from "react"

const Daily = ({ time, weather, tempHi, tempLo }) => {

    return (
        <div className="daily">
            <p>{}</p>
            <img />
            <h4>{tempHi}°|{tempLo}°</h4>
        </div>
    )
}

export default Daily