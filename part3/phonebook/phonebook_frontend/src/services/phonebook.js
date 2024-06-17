import axios from 'axios';
const apiURL = import.meta.env.VITE_API_URL;
const baseUrl = `${apiURL}/api/persons`;

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
        const res = await axios.post(`${baseUrl}`, data);
        return res.data;
    } catch (error) {
        return false;
    }
};

const update = async (id, data) => {
    try {
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
