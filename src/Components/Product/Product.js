import React from 'react';

const Product = (props) => {
    const {author, title, price, year, country, imageLink } = props.product;


    return (
            <div className='product'>
                <img src ={imageLink}></img>
            </div>
    );
};

export default Product;