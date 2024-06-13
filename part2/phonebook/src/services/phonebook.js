import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
    const data = await axios.get(baseUrl);
    return data;
};

const create = (data) => {
    return axios.post(baseUrl, data);
};

const update = (id, data) => {
    return axios.put(`${baseUrl}/${id}`, data);
};

const deletePerson = async (id) => {
    console.log(id);
    return await axios.delete(`${baseUrl}/${id}`);
};

export default {
    getAll: getAll,
    create: create,
    update: update,
    delete: deletePerson,
};
