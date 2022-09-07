import React from 'react';
import './Product.css'


const Product = (props) => {
    const {title, price, imageLink, author} = props.product;
    return (
            <div className='product'>
                <img src={imageLink} alt="" srcset="" />
                <div className="product-info">
                    <p  className='product-name'>{title}</p>
                    <p><small>{author}</small></p>
                    <p><b>¥{price}</b></p>
                </div>
                <button className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                </button>
            </div>
    );
};

export default Product;