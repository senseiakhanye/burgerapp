import * as actionTypes from '../Actions/actionTypes';
import updateState from './utilities';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    total: 0,
    completedOrder: false
}

const addIngredient = (state, action) => {
    return updateState(state, {
        ...state,
        total: state.total + action.price,
        completedOrder: false,
        ingredients: {
            ...state.ingredients,
            [action.ingredient]: state.ingredients[action.ingredient] + 1
        }
    });
}

const removeIngredient = (state, action) => {
    return updateState(state, {
        ...state,
        total: state.total - action.price,
        completedOrder: false,
        ingredients: {
            ...state.ingredients,
            [action.ingredient]: state.ingredients[action.ingredient] - 1
        }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: return addIngredient(state, action);
        case actionTypes.DECREMENT: return removeIngredient(state, action);
        case actionTypes.RESET: return { ...initialState, ingredients: { ...initialState.ingredients }, completedOrder: true }
        default: return state;
    }
}

export default reducer;