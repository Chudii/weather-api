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
  } from '../assets/img/index.js'

const Icon = ({ weather, currentTime = 2, sunrise = 1 , sunset = 3 }) => {
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
                switch (weather) {
                    case 'Clear':
                        return Sunny
                    case 'Cloudy':
                        return PartlyCloudySun
                }
            } else {
                switch (weather) {
                    case 'Clear':
                        return Moon
                    case 'Cloudy':
                        return PartlyCloudyMoon
                }
            }
        } else {
            switch (weather) {
                case 'Clear':
                    return Moon
                case 'Cloudy':
                    return PartlyCloudyMoon
            }
        }
    }

    return (
        <div className='icon-container'>
            <img
                className='icon'
                src={iconSelect(weather)}
            />
        </div>
    )
}

export default Icon