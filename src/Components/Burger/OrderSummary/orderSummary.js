import React from 'react';

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
            <ul>
                {ingredientSummary}
            </ul>
        </div>
    );
}

export default OrderSummary;