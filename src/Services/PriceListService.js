import axios from '../Axios/authinstance';
import environment from '../Services/Environment';

const getPriceList = () => {
    return axios.request( `${environment.url}/api/pricelist` );
}

export default { getPriceList };