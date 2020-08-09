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
            {controls.map(control => <BuildControl key={control.label}
                                        label={control.label} 
                                        addIng={() => props.addIng(control.type)}
                                        removeIng={() => props.removeIng(control.type)} />)}
        </div>
    );
}

export default BuildControls;
