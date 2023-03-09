import React from 'react';

const Product = (props) => {
    return (
        <div>
            <img src={props.product.image} alt={props.product.product_name} />
            <h3>{props.product.product_name.toUpperCase()}</h3>
            <h5>{props.product.price} $</h5>
            <h4>{props.product.relevance} ⭐</h4>
        </div>
    )
}

export default Product 