import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, generateColor} = props;

    
    console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total + product.price;  
    }

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total: ${total}</p>
            <button className='generate-btn' onClick={generateColor}>
                <p>Generate Random</p>
            </button>
        </div>
    );
};

export default Cart;