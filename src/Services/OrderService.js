import orderAxious from '../Axios/authinstance';

const getOrders = () => {
    return new Promise((resolve, reject) => {
        orderAxious.get('/orders').then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            resolve(response.data);
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    })    
}

const getOrder = (id) => {

}

const placeOrder = (order) => {
    return new Promise((resolve, reject) => {
        orderAxious.post('/order', order).then(response => {
            if (response.status !== 201) {
                throw new Error(response.statusText);
            }
            resolve(response.data);
        }).catch(error => {
            console.log(error);
            reject(error);
        });
    });
}

export default {
    getOrders,
    getOrder,
    placeOrder
};