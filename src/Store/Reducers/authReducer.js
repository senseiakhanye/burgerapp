import * as actionTypes from '../Actions/actionTypes';
import updateState from './utilities';

const initialAuthorization = {
    authorized: false,
    user: null,
    loading: false,
    username: "",
    password: "",
    token: "",
    hasError: false,
    error: ""
};

const initWithDetails = (state, action) => {
    return updateState( state, {
        loading: true,
        username: action.username,
        password: action.password
    })
}

const authoriseUser = (state, action) => {
    return updateState( state, { 
        authorized: action.authorized, 
        user: action.user, 
        loading: false,
        error: action.error,
        hasError: action.hasError,
        token: action.token
    });
}

const authoriseFromLocalStorage = (state, action) => {
    return updateState( state, {
        loading: action.loading,
        authorized: action.authorized,
        user: action.user,
        token: action.token
    });
}

const reducer = (state = initialAuthorization, action) => {
    switch (action.type) {
        case actionTypes.AUTHORISE : return authoriseUser(state, action);
        case actionTypes.INIT_AUTHORISE: return initWithDetails(state, action);
        case actionTypes.AUTHORISE_LOCAL_STORAGE: return authoriseFromLocalStorage(state, action);
        case actionTypes.UPDATE_USER: return updateState(state, { user: action.user });
        case actionTypes.GET_USER: return updateState(state, { loading: true} );
        default: return state;
    }
}


export default reducer;