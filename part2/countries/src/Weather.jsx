import weatherService from './services/weather.js';
import { useEffect } from 'react';
import { useState } from 'react';

const Weather = ({ latlng }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            const result = await weatherService.get(latlng);

            setWeather(result.data);
            console.log(weather.weather[0].icon);
        };
        getWeather();
    }, []);
    if (!weather) return null;
    return (
        <div>
            <p>temperature {weather.main.temp} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>wind {weather.wind.speed}m/s</p>
        </div>
    );
};

export default Weather;
