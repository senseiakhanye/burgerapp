import React, { useState } from 'react';
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/modal';
import OrderSummary from '../Burger/OrderSummary/orderSummary';

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
        total: 0,
        canPurchase: false, 
        show: false
    });

    const canPurchase = (ingredientsGiven) => {
        return Object.keys(ingredientsGiven)
            .map(key => ingredientsGiven[key])
            .reduce((sum, item) => sum += item, 0) > 0;
    }

    const addIngredients = (type) => {
        updateIngredients((oldIngridients) => {
            const updatedIngredients = { ...oldIngridients.ingredients };
            const price = oldIngridients.total + INGREDIENTS_PRICES[type];
            updatedIngredients[type] += 1;
            const canPlaceOrder = canPurchase(updatedIngredients);
            const updateData = { ingredients : updatedIngredients, total: price, canPurchase: canPlaceOrder, show: oldIngridients.show};
            return updateData;
        })
    }

    const removeIngredients = (type) => {
        updateIngredients((oldIngridients) => {
            if (oldIngridients.ingredients[type] > 0) {
                const updatedIngredients = { ...oldIngridients.ingredients };
                const price = oldIngridients.total - INGREDIENTS_PRICES[type];
                updatedIngredients[type] -= 1;
                const canPlaceOrder = canPurchase(updatedIngredients);
                const updateData = { ingredients : updatedIngredients, total: price, canPurchase: canPlaceOrder, show: oldIngridients.show};
                return updateData;
            }
            return oldIngridients;
        });
    }

    const purchaseBurger = () => {
        updateIngredients(oldIngridients => {
            const updatedIngredients = { ...oldIngridients };
            updatedIngredients.show = true;
            // const updateData = { ingredients : updatedIngredients, total: oldIngridients.total, canPurchase: oldIngridients.canPurchase, show: true};
            return updatedIngredients;
        })
    }

    const updateShow = () => {
        updateIngredients(oldIngridients => {
            const updated = { ...oldIngridients};
            updated.show = false;
            return updated;
        })
    }

    const confirmPurchase = () => {
        alert('Confirmed purchase');
    }

    return (
        <div>
            <Modal show={ingredients.show} updateShow={updateShow}>
                <OrderSummary ingredients={ingredients.ingredients} price={ingredients.total} updateShow={updateShow} confirmPurchase={confirmPurchase}/>
            </Modal>
            <Burger ingredients={ingredients.ingredients}/>
            <BuildControls addIng={addIngredients}
                        removeIng={removeIngredients} 
                        price={ingredients.total} 
                        canPurchase={ingredients.canPurchase}
                        purchase={purchaseBurger}/>
        </div>
    )
}

export default BurgerBuilder;