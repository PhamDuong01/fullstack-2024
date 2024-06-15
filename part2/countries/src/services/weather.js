import axios from 'axios';

const getWeather = async (latlng) => {
    const [lat, lng] = latlng;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    try {
        const result = await axios.get(baseUrl);
        return result;
    } catch (err) {
        return null;
    }
};

export default {
    get: getWeather,
};
