import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad'},
        { label: 'Bacon', type: 'bacon'},
        { label: 'Cheese', type: 'cheese'},
        { label: 'Meat', type: 'meat'}
    ]
    return (
        <div className={styles.BuildControls}>
            <div>Price : {props.price.toFixed(2)}</div>
            {controls.map(control => <BuildControl key={control.label}
                                        label={control.label} 
                                        addIng={() => props.addIng(control.type)}
                                        removeIng={() => props.removeIng(control.type)} />)}
            <button className={styles.OrderButton} 
                    disabled={!props.canPurchase}
                    onClick={props.purchase}>PLACE ORDER</button>
        </div>
    );
}

export default BuildControls;
