import * as actionTypes from './actionTypes';
import authService from '../../Services/authService';
import { setHeader } from '../../Axios/authinstance';

export const authorizeSuccess = (data) => {
    localStorage.setItem('token', data.token);
    return { 
        type: actionTypes.AUTHORISE,  
        authorized: true,
        user: data.user,
        token: data.token,
        error: null,
        hasError: false
    };
}

export const authorizeFail = () => {
    return {
        type: actionTypes.AUTHORISE,
        loading: false, 
        user: null,
        authorized: false,
        error: "Username or Password Incorrect",
        hasError: true
    }
}

export const getUser = () => {
    return {
        type: actionTypes.GET_USER
    }
}

export const initAuthorization = (username, password) => {
    return {
        type: actionTypes.INIT_AUTHORISE,
        loading: true,
        username,
        password
    }
}

export const authorizeFromLocalStorage = (token, user) => {
    const authorized = user != null;
    return {
        type: actionTypes.AUTHORISE_LOCAL_STORAGE,
        authorized: authorized,
        loading: false,
        user,
        token
    }
}

export const authoriseApplication = (e) => {
    return dispatch => {
        dispatch(initAuthorization(e.target.username.value, e.target.password.value));
        authService.authorize(e.target.username.value, e.target.password.value).then(user => {
            setHeader(user.data.token);
            dispatch(authorizeSuccess(user.data));
        }).catch(error => {
            dispatch(authorizeFail());
        });
    }
}

export const updateUserRedux = (user) => {
    return {
        type: actionTypes.UPDATE_USER,
        user
    }
}

export const updateUser = (e) => {
    return (dispatch, getState) => {
        const user = { ...getState().auth.user};
        if (e.target.name === "street" || e.target.name === "postal") {
            user.address = {...user.address};
            const keyName = (e.target.name === "postal") ? "zipCode" : e.target.name;
            user.address[keyName] = e.target.value;
        } else {
            user[e.target.name] = e.target.value;
        }
        dispatch(updateUserRedux(user));
    }
}

export const checkIfAuthorised = () => {
    return (dispatch, getState) => {
        const token = localStorage.getItem('token');
        if (token != null && !getState().auth.loading) {
            setHeader(token);
            dispatch(getUser());
            authService.getUser()
                .then(data => {
                    const user = data.data;
                    dispatch(authorizeFromLocalStorage(token, user));
                })
                .catch(error => {
                    dispatch(authorizeFromLocalStorage(token, null));
                })
        }
    }
}