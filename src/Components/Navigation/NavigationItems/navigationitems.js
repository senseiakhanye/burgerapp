import React from 'react';

import styles from './navigationitems.module.css';
import NavigationItem from './NavigationItem/navigationitem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems;