import React from 'react';

import styles from './Order.module.css';

const Order = (props) => {
    const ingredientsGiven = Object.keys(props.ingredients)
                                    .map(key => {
                                        return `${key}(${props.ingredients[key]})`;
                                    }).join(' ,')
    return (
        <div className={styles.Order}>
            <p>Ingredients : {ingredientsGiven}</p>
            <p>Price: <strong>{(+props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default Order;