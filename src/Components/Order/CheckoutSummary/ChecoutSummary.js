import React from 'react';

import Burger from '../../Burger/Burger';
import globalStyles from '../../UI/styles.module.css';
import style from './CheckoutSummary.module.css';
import { withRouter } from 'react-router-dom';

const CheckoutSummary = (props) => {
    

    const confirmUserAddress = () => {
        props.history.replace(`${props.match.path}/contact-data`);
    }

    const cancelClick = () => {
        props.history.goBack();
    }

    return (
        <div className={style.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <button onClick={cancelClick} className={`${globalStyles.Button} ${globalStyles.Danger}`}>Cancel</button>            
            <button onClick={confirmUserAddress} className={`${globalStyles.Button} ${globalStyles.Success}`}>Continue</button>
        </div>
    );
};

export default withRouter(CheckoutSummary);