import React, { useState }  from 'react';
import styles from './auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authoriseApplication } from '../../Store/Actions/actions'
import Spinner from '../UI/Spinner/spinner';

const Auth = () => {
    const dispatch = useDispatch();
    // const loginData = useSelector(state => state.auth, shallowEqual);
    const hasError = useSelector(state => state.auth.hasError);
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);
    let [ username, updateUsername ] = useState("");

    const authorize = (e) => {
        e.preventDefault();
        dispatch(authoriseApplication(e));
    }

    const usernameKeyChanged = (e) => {
        updateUsername(e.currentTarget.value);
    }

    const errorView = (hasError) ? <p className={styles.error}>{error}</p> : null;

    const authorizeView = (loading) ? <Spinner /> : (
            <form className={styles.formcontainer} onSubmit={authorize}>
                <input type="text" placeholder="Username" name="username" onChange={usernameKeyChanged} required value={username} />
                <input type="password" placeholder="Password" name="password" required />
                <button>Login</button>
                {errorView}
            </form>
        );

    return (
        <div className={styles.authorizecontainer}>
            {authorizeView}
        </div>
        
    );
}

export default Auth;