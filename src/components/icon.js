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

const Icon = ({ weather, description, currentTime = 2, sunrise = 1 , sunset = 3 }) => {
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
                    case 'Clouds':
                        return PartlyCloudySun
                }
            } else {
                switch (weather) {
                    case 'Clear':
                        return Moon
                    case 'Clouds':
                        return PartlyCloudyMoon
                }
            }
        } else {
            switch (weather) {
                case 'Clear':
                    return Moon
                case 'Clouds':
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
            {
                description &&
                <p>{description}</p>
            }
        </div>
    )
}

export default Icon