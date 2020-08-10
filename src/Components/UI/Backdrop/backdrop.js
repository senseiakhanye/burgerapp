import React from 'react';
import styles from './backdrop.module.css';

const Backdrop = (props) => {
    return (
        props.show ? <div className={styles.Backdrop} onClick={props.updateShow}></div> : null
    );
}

export default Backdrop;