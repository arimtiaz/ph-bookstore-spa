import React from 'react';
import './Product.css'


const Product = (props) => {
    console.log(props)
    const {product, handleAddToCart} = props;
    const {title, price, imageLink, author} = product;

    return (
            <div className='product'> 
                <img src={imageLink} alt="" srcset="" />
                <div className="product-info">
                    <p  className='product-name'>{title}</p>
                    <p><small>{author}</small></p>
                    <p><b>¥{price}</b></p>
                </div>
                <button className='btn-cart' onClick={()=>handleAddToCart(product)}>
                    <p className='btn-text'><b>Add to Cart</b></p>
                </button>
            </div>
    );
};

export default Product;