import React from 'react';
import './Item.css'
const Item = (props) => {
    console.log(props)
    const { name, img, madeIn, price, brand } = props.item;
    return (
        <div className="item">
            <img src={img} alt="" />
            <h4 className="item_name">{name}</h4>
            <h4>Made In: {madeIn}</h4>
            <h4>Price: {price}</h4>
            <h4>Brand: {brand}</h4>
            <button onClick={() => props.handleAddToCart(props.item)}
                className="btn-item">add to Cart</button>
        </div>
    );
};

export default Item;