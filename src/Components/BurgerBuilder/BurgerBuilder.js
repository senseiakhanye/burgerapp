import React, { useState } from 'react';
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuildControls/BuildControls';

const BurgerBuilder = (props) => {

    const INGREDIENTS_PRICES = {
        salad: 0.1,
        bacon: 1,
        cheese: .17,
        meat: 2
    }
    const [ ingredients, updateIngredients ] = useState({
        ingredients: {
            salad: 0, 
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        total: 0
    })

    const addIngredients = (type) => {
        updateIngredients((oldIngridients) => {
            const updatedIngredients = { ...oldIngridients.ingredients };
            const price = oldIngridients.total + INGREDIENTS_PRICES[type];
            updatedIngredients[type] += 1;
            const updateData = { ingredients : updatedIngredients, total: price};
            return updateData;
        })
    }

    const removeIngredients = (type) => {
        updateIngredients((oldIngridients) => {
            if (oldIngridients.ingredients[type] > 0) {
                const updatedIngredients = { ...oldIngridients.ingredients };
                const price = oldIngridients.total - INGREDIENTS_PRICES[type];
                updatedIngredients[type] -= 1;
                const updateData = { ingredients : updatedIngredients, total: price};
                return updateData;
            }
            return oldIngridients;
        })
    }

    return (
        <div>
            <Burger ingredients={ingredients.ingredients}/>
            <BuildControls addIng={addIngredients} removeIng={removeIngredients}/>
        </div>
    )
}

export default BurgerBuilder;