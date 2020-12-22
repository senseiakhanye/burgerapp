import * as actionTypes from './actionTypes';
import pricelistService from '../../Services/PriceListService';

const storePriceList = (priceList) => {
    return {
        type: actionTypes.PRICELIST,
        priceList,
        stored: true
    }
}

const fecthError = () => {
    return {
        type: actionTypes.PRICELIST_ERROR,
        error: true
    }
}

export const getPriceList = () => {
    return dispatch => {
        pricelistService.getPriceList().then(result => {
            dispatch(storePriceList(result.data));
        }).catch(error => {
            dispatch(fecthError());
        });
    }
}
