import React from 'react';
import styles from './modal.module.css';
import Backdrop from '../Backdrop/backdrop';

const Modal = (props) => {
    return (
        <div>
            <Backdrop show={props.show} updateShow={props.updateShow}/>
            <div className={styles.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </div>
        
    );
}

export default Modal;