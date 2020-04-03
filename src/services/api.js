import axios from 'axios';

const api = axios.create({
    baseURL: 'https://meu-back-end.herokuapp.com/ongs'
});

export default api;