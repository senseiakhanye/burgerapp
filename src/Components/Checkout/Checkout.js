import React  from 'react';
import CheckoutSummary from '../Order/CheckoutSummary/ChecoutSummary';
import { withRouter, Route } from 'react-router-dom';
import ContactData from '../Order/ContactDetails/ContactData';
import { useSelector } from 'react-redux';

const Checkout = (props) => {
    
    const dummyIngredients = useSelector( state => state.ingredients.ingredients) || null;
    const authorised = useSelector( state => state.auth.authorized) || null;

    if (!authorised) {
        props.history.replace("/");
    }

    if (dummyIngredients == null) {
        props.history.replace("/");
    }

    const checkoutSummaryDiv = (dummyIngredients != null) ? <CheckoutSummary ingredients={dummyIngredients} /> : null;
    
    return (
        <div>
            {checkoutSummaryDiv}
            <Route path={props.match.path + '/contact-data'} component={ContactData} />
            {/* <Route path={props.match.url + '/contact-data'} render={(props) => <ContactData ingredients={dummyIngredients} { ...props }/>} /> */}
        </div>
    )
}

export default withRouter(Checkout);
