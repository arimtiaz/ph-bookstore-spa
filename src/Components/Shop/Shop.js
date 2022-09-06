import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>Hello</h1>
            </div>
        <div className="cart-container">
                <h1>World</h1>
        </div>
        </div>
    );
};

export default Shop;