import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart, name } = props;
    let total = 0
    for (const item of cart) {
        total = total + item.price
    }
    return (
        <div className='cart'>
            <h3>Total added: {props.cart.length} </h3>
            <h4>Total cost: ${total} </h4>
            {
                cart.map(item => (<li>{item.name}</li>))
            }
        </div>
    );
};

export default Cart;