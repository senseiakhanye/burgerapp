import React from 'react';

import styles from './toolbar.module.css';
import Logo from '../../Logo/logo';
import NavigationsItems from '../../Navigation/NavigationItems/navigationitems'

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationsItems />
            </nav>
        </header>
    )
}

export default Toolbar;