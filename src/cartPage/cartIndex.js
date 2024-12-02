import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './cartCss.css';

const CartIndex = () => {
    // Sample cart items (in a real app, this would come from global state/context)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Colombian Coffee",
            price: 14.99,
            quantity: 1,
            image: "coffee1.jpg"
        },
        {
            id: 2,
            name: "Ethiopian Coffee",
            price: 16.99,
            quantity: 1,
            image: "coffee2.jpg"
        }
    ]);

    const [wishlist, setWishlist] = useState([]);

    // Cart functions
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item => 
            item.id === itemId ? {...item, quantity: newQuantity} : item
        ));
    };

    const moveToWishlist = (item) => {
        setWishlist([...wishlist, item]);
        removeFromCart(item.id);
    };

    const moveToCart = (item) => {
        setCartItems([...cartItems, {...item, quantity: 1}]);
        setWishlist(wishlist.filter(wishItem => wishItem.id !== item.id));
    };

    // Calculate total
    const cartTotal = cartItems.reduce((total, item) => 
        total + (item.price * item.quantity), 0
    );

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            
            {/* Cart Items */}
            <div className="cart-section">
                <h2>Cart Items</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div className="item-actions">
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                        <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            <h3>Total: ${cartTotal.toFixed(2)}</h3>
                            <button className="checkout-button">Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Wishlist */}
            <div className="wishlist-section">
                <h2>Wishlist</h2>
                {wishlist.length === 0 ? (
                    <p>Your wishlist is empty</p>
                ) : (
                    <div className="wishlist-items">
                        {wishlist.map(item => (
                            <div key={item.id} className="wishlist-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <button onClick={() => moveToCart(item)}>Move to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartIndex;
