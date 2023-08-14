import {
    Sunny,
    Moon,
    Cloudy,
    Snow,
    Storm,
    RainClouds,
    PartlyCloudySun,
    PartlyCloudyMoon,
    RainCloudsPouring,
    WeatherAlert
  } from './assets/img/index.js'

const Icon = ({ weather, currentTime, sunrise, sunset }) => {
    const iconSelect = (weather) => {
        switch (weather) {
            case 'Fog':
            case 'Mist':
                return Cloudy
            case 'Thunderstorm':
                return Storm
            case 'Drizzle':
                return RainClouds
            case 'Rain':
                return RainCloudsPouring
            case 'Snow':
                return Snow
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Sand':
            case 'Ash':
            case 'Squall':
            case 'Tornado':
                return WeatherAlert
        }

        if (currentTime >= sunrise) {
            if (currentTime < sunset) {

            } else {

            }
        } else {
            
        }
    }

    return (
        <div>
            <img 
                className=''
                src={iconSelect(weather)}
            />
        </div>
    )
}

export default Icon