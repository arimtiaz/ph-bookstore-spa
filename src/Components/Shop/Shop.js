import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart= (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    const generateColor= (product) =>{
        let randomItem = product[Math.floor(Math.random()*product.length)];  
        setItem(randomItem)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key = {product.id} 
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart} generateColor = {generateColor}></Cart>
            </div>
        </div>
    );
};

export default Shop;