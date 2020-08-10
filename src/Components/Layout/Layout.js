import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/toolbar';
import SideDrawer from '../Navigation/NavigationItems/SideDrawer/sidedrawer';

const Layout = (props) => {
    return (
        <div>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;