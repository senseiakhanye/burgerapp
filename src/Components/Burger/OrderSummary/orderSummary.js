import React from 'react';
import globalStyles from '../../UI/styles.module.css';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return {
                key: key,
                total: props.ingredients[key]
            };
        }).filter(ingredient => ingredient.total > 0).map((ing, _i) => {
            return <li key={'ing' + ing + _i}><span style={{textTransform: 'capitalize'}}>{ing.key} x {ing.total}</span></li>
        })
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <p>Total: <strong>{props.price.toFixed(2)}</strong></p>
            <ul>
                {ingredientSummary}
            </ul>
            <button className={`${globalStyles.Button} ${globalStyles.Danger}`} onClick={props.updateShow}>CANCEL</button>
            <button className={`${globalStyles.Button} ${globalStyles.Success}`} onClick={props.confirmPurchase}>OK</button>
        </div>
    );
}

export default OrderSummary;