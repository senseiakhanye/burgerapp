import React, { useEffect, useState } from 'react';

import orderService from '../../Services/OrderService';
import Order from '../Order/Order';
import Spinner from '../UI/Spinner/spinner'
import Modal from '../UI/Modal/modal';

const Orders = () => {
    const [ orders, updateOrders ] = useState(null);
    const [ foundError, updateError] = useState(false);

    useEffect(() => {
        orderService.getOrders().then(data => {
            updateOrders(oldOrders => {
                return data;
            });
        }).catch(error => {
            updateError(oldError => {
                return true;
            })
            console.log(error);
        });
    }, []);

    const updateShow = () => {
        updateError(oldError => {
            return false;
        })
    }

    const myOrders = (orders != null) ? orders.map( myOrder => <Order key={myOrder._id} price={myOrder.price} ingredients={myOrder.ingredients}/>) : <Spinner />;
    const showOrders = (foundError) ? <Modal show={true} updateShow={updateShow}>Unable to fetch orders</Modal> : myOrders;

    return (
        showOrders
    );
}

export default Orders;