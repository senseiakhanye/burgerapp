import React, { useState, useEffect } from 'react';
import Burger from '../Burger/Burger'
import BuildControls from '../Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/modal';
import OrderSummary from '../Burger/OrderSummary/orderSummary';
import Spinner from '../UI/Spinner/spinner';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import actions from '../../Store/actions';
import { getPriceList, addIngredient, removeIngredient } from '../../Store/Actions/actions';

const BurgerBuilder = (props) => {

    // const [ priceList, updatePriceList ] = useState(null);
    // const ingredients = useSelector(state => state.ingredients);
    const [ stateController, updateState ] = useState({
        // ingredients: {
        //     salad: 0, 
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        // total: 0,
        canPurchase: false, 
        show: false,
        ordering: false,
        error: false,
        ingredientsError: false
    });

    const total = useSelector(state => state.ingredients.total);
    const priceList = useSelector(state => state.price);
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPriceList());
    }, [dispatch, updateState]);

    useEffect(() => {
        updateState((oldIngridients) => {
            const canPlaceOrder = canPurchase(ingredients);
            const updateData = { canPurchase: canPlaceOrder, show: oldIngridients.show};
            return updateData;
        });
    }, [ingredients]);

    

    const canPurchase = (ingredientsGiven) => {
        return Object.keys(ingredientsGiven)
            .map(key => ingredientsGiven[key])
            .reduce((sum, item) => sum += item, 0) > 0;
    }

    const addIngredients = (type) => {
        dispatch(addIngredient(type, priceList.priceList[type]));
    }

    const removeIngredients = (type) => {
        if (ingredients[type] > 0) {
            dispatch(removeIngredient(type, priceList.priceList[type]));
            // updateState((oldIngridients) => {
            //     if (ingredients[type] > 0) {
            //         const canPlaceOrder = canPurchase(ingredients);
            //         const updateData = { canPurchase: canPlaceOrder, show: oldIngridients.show};
            //         return updateData;
            //     }
            //     return oldIngridients;
            // });
        }
    }

    const purchaseBurger = () => {
        updateState(oldIngridients => {
            const updatedIngredients = { ...oldIngridients };
            updatedIngredients.show = true;
            return updatedIngredients;
        })
    }

    const updateShow = () => {
        updateState(oldIngridients => {
            const updated = { ...oldIngridients};
            updated.show = false;
            return updated;
        })
    }

    // const updateOrderingProgress = (isOrdering) => {
    //     updateState(oldIngridients => {
    //         const updated = { ...oldIngridients};
    //         updated.ordering = isOrdering;
    //         return updated;
    //     })
    // }

    const confirmPurchase = () => {
        // const allIngridients = Object.keys(ingredients.ingredients).reduce((qS, key) => {
        //     if (qS === "") {
        //         return `${key}=${ingredients.ingredients[key]}`; 
        //     }
        //     return qS += `&${key}=${ingredients.ingredients[key]}`; 
        // }, ``)

        // const allIngridients = Object.keys(ingredients).map(key => {
        //     return encodeURIComponent(key) + "=" + encodeURIComponent(ingredients[key]);
        // }).join('&');
        props.history.push(`/checkout`);
        // props.history.push({
        //     pathname: '/checkout',
        //     search: `?${allIngridients}`
        // })
    }

    let showControls = priceList.stored ? (
        <BuildControls addIng={addIngredients}
                        removeIng={removeIngredients} 
                        price={total} 
                        canPurchase={stateController.canPurchase}
                        purchase={purchaseBurger}/>
        ) : (<Spinner />);
    if (priceList.error) {
        showControls = (
            <Modal show={true} updateShow={updateShow}>
                Error retrieving ingridients
            </Modal>
        );
    }
    let orderingInProgress = stateController.ordering ? <Spinner /> :
        (
            <OrderSummary 
                    ingredients={ingredients} 
                    price={total} 
                    updateShow={updateShow} 
                    confirmPurchase={confirmPurchase}/>
        );
    if (stateController.error) {
        orderingInProgress = <h1>Error placing order</h1>;
    }
    return (
        <div>
            <Modal show={stateController.show} updateShow={updateShow}>
                {orderingInProgress}      
            </Modal>
            <Burger ingredients={ingredients}/>
            {showControls}
        </div>
    )
}

export default withRouter(BurgerBuilder);