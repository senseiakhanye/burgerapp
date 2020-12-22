import axios from '../Axios/normalinstance';
import axios_auth from '../Axios/authinstance';

const authorize = (username, password) => {
    return axios.post('/user/login', { username, password });
}

const getUser = () => {
    return axios_auth.get('/user');
}


export default {
    authorize,
    getUser
}