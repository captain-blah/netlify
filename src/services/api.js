import axios from 'axios';

const api = axios.create({
    baseURL: 'https://meu-back-end.herokuapp.com'
});

export default api;