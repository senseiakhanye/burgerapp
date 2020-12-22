import * as actionTypes from './actionTypes';

export const addIngredient = (ingredientName, price) => {
    return {
        type: actionTypes.INCREMENT,
        ingredient: ingredientName,
        price
    }
}

export const removeIngredient = (ingredientName, price) => {
    return {
        type: actionTypes.DECREMENT,
        ingredient: ingredientName,
        price
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET
    }
}