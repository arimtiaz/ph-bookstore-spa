import React from 'react';
import './Product.css'


const Product = (props) => {
    const {title, price, imageLink, author} = props.product;
    return (
            <div className='product'>
                <div className="product-info">
                <img src={imageLink} alt="" srcset="" />
                <h2>{title}</h2>
                <p><small>{author}</small></p>
                <p>¥{price}</p>
                </div>
                <button className='btn-cart'>
                    <p className='btn-text'>Add To Cart</p>
                </button>
            </div>
    );
};

export default Product;