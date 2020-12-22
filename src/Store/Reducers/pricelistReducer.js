import * as actionTypes from '../Actions/actionTypes';
import updateState from './utilities';

const intitialPriceList = {
    priceList: {},
    error: false,
    stored: false
}

const reducer = (state = intitialPriceList, action) => {
    switch (action.type) {
        case actionTypes.PRICELIST: return updateState(state, { priceList: action.priceList, stored: action.stored });
        case actionTypes.PRICELIST_ERROR: return updateState(state, { error: action.error });
        default: return state;
    }
}

export default reducer;