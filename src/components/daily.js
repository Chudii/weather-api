

const Daily = ({ label, weather, tempHi, tempLo }) => {

    return (
        <div className="hourly">
            <p>{label}</p>
            <img />
            <h4>{tempHi}°|{tempLo}°</h4>
        </div>
    )
}

export default Daily