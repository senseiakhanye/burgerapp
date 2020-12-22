import React from 'react';

import styles from './navigationitems.module.css';
import NavigationItem from './NavigationItem/navigationitem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="orders">Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems;