import axios from 'axios';
import Environment from '../Services/Environment';

const instance = axios.create({
    baseURL: Environment.url
});

// instance.interceptors.request.use(config => {
//     // console.log(config);
//     return config;
// })

export const setHeader = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;