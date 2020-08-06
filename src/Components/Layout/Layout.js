import React from 'react';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div>
            <div>Menu will come here</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;