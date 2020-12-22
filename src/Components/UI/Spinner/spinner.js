import React from 'react';
import styles from './ellipsis.module.css';
import containerStyle from './container.module.css';

const Spinner = () => {
    return (
        <div className={containerStyle.container}>
            <div className={styles.ellipsis}><div></div><div></div><div></div><div></div></div>
        </div>
        
    );
}

export default Spinner;