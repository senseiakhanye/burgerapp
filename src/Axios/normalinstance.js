import axios from 'axios';
import environment from '../Services/Environment';

const instance = axios.create({
    baseURL: environment.url
});

export default instance;