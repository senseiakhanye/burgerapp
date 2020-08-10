import React from 'react';

import Logo from '../../../Logo/logo';
import NavigationItems from '../navigationitems';
import styles from './sidedrawer.module.css';

const SideDrawer = (props) => {
    return (
        <div className={styles.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default SideDrawer;