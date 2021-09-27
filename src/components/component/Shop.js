import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Item from './Item/Item';

import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./items.JSON')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleAddToCart = (item) => {
        const newcart = [...cart, item];
        setCart(newcart);
    }



    return (
        <div className="shop-container">
            <div className="item-container">

                {
                    items.map(item => <Item

                        item={item}
                        handleAddToCart={handleAddToCart}
                    >
                    </Item>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;