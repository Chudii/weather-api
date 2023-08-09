

const Hourly = ({ label, weather, temp }) => {

    return (
        <div className="hourly">
            <p>{label}</p>
            <img />
            <h4>{temp}°</h4>
        </div>
    )
}

export default Hourly