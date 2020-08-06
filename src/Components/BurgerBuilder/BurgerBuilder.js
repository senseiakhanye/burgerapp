import React, { useState } from 'react';
import Burger from '../Burger/Burger'

const BurgerBuilder = (props) => {
    const [ ingredients, updateIngredients ] = useState( {
        salad: 0, 
        bacon: 0,
        cheese: 0,
        meat: 0
    })
    return (
        <div>
            <Burger ingredients={ingredients}/>
            <div>Build Controls</div>
        </div>
    )
}

export default BurgerBuilder;