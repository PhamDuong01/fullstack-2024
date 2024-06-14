import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/';

const getAll = async () => {
    const result = await axios.get(`${baseUrl}/api/all`);
    return result.data;
};

// const get = async (name) => {
//     const result = await axios.get(`${baseUrl}/api/name/${name}`);
//     return result.data;
// };

export default {
    getAll,
    // get,
};
