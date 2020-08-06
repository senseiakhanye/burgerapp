import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/BurgerIngredient';

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} ></BurgerIngredient>;
        })
    }).reduce((arr, ing) => {
        return arr.concat(ing);
    }, []);
    ingredients = (ingredients.length > 0) ? ingredients : <p>Please start adding ingredients</p>
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;