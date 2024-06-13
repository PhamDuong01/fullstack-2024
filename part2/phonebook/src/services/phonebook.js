import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
    try {
        const res = await axios.get(baseUrl);
        return res.data;
    } catch (error) {
        return false;
    }
};

const create = async (data) => {
    try {
        console.log(data);
        const res = await axios.post(`${baseUrl}`, data);
        return res.data;
    } catch (error) {
        return false;
    }
};

const update = async (id, data) => {
    try {
        console.log(id, data);
        const res = await axios.put(`${baseUrl}/${id}`, data);
        return res;
    } catch (error) {
        return false;
    }
};

const deletePerson = async (id) => {
    try {
        const data = await axios.delete(`${baseUrl}/${id}`);
        return data.data;
    } catch (error) {
        return false;
    }
};

export default {
    getAll: getAll,
    create: create,
    update: update,
    delete: deletePerson,
};
