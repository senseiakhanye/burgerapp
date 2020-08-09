import React from 'react';
import styles from './modal.module.css';

const Modal = (props) => {
    return (
        <div className={styles.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translate(-100vh',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    );
}

export default Modal;