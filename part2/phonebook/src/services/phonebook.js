import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
    const data = await axios.get(baseUrl);
    return data;
};

const create = (data) => {
    return axios.post(baseUrl, data);
};

const deletePerson = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`);
};

export default {
    getAll: getAll,
    create: create,
    delete: deletePerson,
};
