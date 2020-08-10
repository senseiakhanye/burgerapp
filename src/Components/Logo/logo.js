import React from 'react';

import styles  from './logo.module.css';
import BurgerLogo from '../../Assets/burger-logo.png';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    );
}

export default Logo;