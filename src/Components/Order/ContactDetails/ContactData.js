import React, { useState } from 'react';
import styles from './ContactData.module.css';
import globalStyles from '../../UI/styles.module.css';
import orderService from '../../../Services/OrderService';
import Spinner from '../../UI/Spinner/spinner';
import Modal from '../../UI/Modal/modal';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetIngredients, updateUser } from '../../../Store/Actions/actions';

const ContactData = (props) => {

    const ingredients = useSelector(state => state.ingredients.ingredients) || null;
    const price = useSelector(state => state.ingredients.total);
    const completedOrder = useSelector(state => state.ingredients.completedOrder);
    const userDetails = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    if (ingredients == null) {
        props.history.replace("/");
    }

    const [ orderingInfo, updateOrdering ] = useState({
        ordering: false,
        error: false
    });

    if (completedOrder) {
        props.history.replace("/");
    }
    

    const orderHandler = (e) => {
        e.preventDefault();
        const order = {
            ingredients,
            price,
            customer: {
                name: e.target.name.value,
                address: {
                    street: e.target.street.value,
                },
                email: e.target.email.value,
            },
            deliveryMethod: e.target.delivery.value
        }
        updateOrdering(oldOderingInfo => {
            const updated = { ...oldOderingInfo };
            updated.ordering = true;
            return updated;
        });
        orderService.placeOrder(order).then(placedOrder => {
            dispatch(resetIngredients());
        }).catch(error => {
            updateOrdering(oldOrderingInfo => {
                const updated = { ...oldOrderingInfo };
                updated.ordering = false;
                updated.error = true;
                return updated;
            })
        });
    }

    const updateShow = () => {
        updateOrdering(oldOderingInfo => {
            const updated = { ...oldOderingInfo };
            updated.error = false;
            return updated;
        });
    }

    const onChanged = (event) => {
        dispatch(updateUser(event));
    }

    const touched = (event) => {
        event.target.classList.add(styles.touched);
    }

    const formDiv = (orderingInfo.ordering) ? <Spinner /> : (
        <form onSubmit={orderHandler}>
            <input type="text" name="name" placeholder="Your name" onChange={onChanged} required minLength="4" onFocus={touched} value={userDetails.name} />
            <input type="email" name="email" placeholder="Your email" onChange={onChanged} required minLength="4" onFocus={touched} value={userDetails.email} />
            <input type="text" name="street" placeholder="Street" onChange={onChanged} required minLength="4" onFocus={touched} value={userDetails.address.street} />
            <input type="text" name="postal" placeholder="Postal" onChange={onChanged} required minLength="4" onFocus={touched} value={userDetails.address.zipCode} />
            <select name="delivery">
                <option value="fastest">Fastest</option>
                <option value="normal">Normal</option>
            </select>
            <button className={`${globalStyles.Button} ${globalStyles.Success}`}>ORDER</button>
        </form>
    );
    const dynaminDiv = (!orderingInfo.error) ? (
        <div className={styles.ContactData}>
            <h4>Enter your Contact Data</h4>
            {formDiv}
        </div>
    ) : (
        <Modal show={true} updateShow={updateShow}>
            There was an error placing an order.
        </Modal>
    )

    return dynaminDiv;
}

export default withRouter(ContactData);