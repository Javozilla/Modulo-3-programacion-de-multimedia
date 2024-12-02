import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coffeeImage1 from '../../assets/coffee1.jpeg';
import coffeeImage2 from '../../assets/coffee2.jpeg';
import coffeeImage3 from '../../assets/coffee3.jpeg';
import coffeeImage4 from '../../assets/coffee4.jpeg';
import coffeeImage5 from '../../assets/coffee5.jpeg';
import coffeeImage6 from '../../assets/coffee6.jpeg';

const ProductsPage = () => {
    const [imageError, setImageError] = useState({}); // Track errors for each image

    const handleImageError = (productId) => {
        setImageError(prev => ({
            ...prev,
            [productId]: true
        }));
    };

    const products = [
        {
            id: 1,
            name: "Colombian Coffee",
            description: "Premium single-origin Colombian coffee beans",
            price: 14.99,
            image: coffeeImage1
        },
        {
            id: 2,
            name: "Ethiopian Coffee",
            description: "Rich and aromatic Ethiopian blend",
            price: 16.99,
            image: coffeeImage2
        },
        {
            id: 3,
            name: "House Blend",
            description: "Our signature house blend coffee",
            price: 12.99,
            image: coffeeImage3
        },
        {
            id: 4,
            name: "Brazilian Santos",
            description: "Smooth and mild Brazilian coffee beans",
            price: 15.99,
            image: coffeeImage4
        },
        {
            id: 5,
            name: "Dark Roast Special",
            description: "Bold and intense dark roasted blend",
            price: 13.99,
            image: coffeeImage5
        },
        {
            id: 6,
            name: "Vanilla Flavored",
            description: "Sweet and aromatic vanilla-infused coffee",
            price: 17.99,
            image: coffeeImage6
        }
    ];

    const handleAddToCart = (product) => {
        // Here you would implement the logic to add to cart
        console.log(`Added ${product.name} to cart`);
    };

    return (
        <div className="products-page">
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <h1>LOGO</h1>
                </div>
                <ul className="app__navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">Shopping Cart</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="products-container">
                <h1>Our Coffee Selection</h1>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            {imageError[product.id] ? (
                                <div className="image-fallback">
                                    <p>No image available</p>
                                </div>
                            ) : (
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="product-image"
                                    onError={() => handleImageError(product.id)}
                                />
                            )}
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="price">${product.price}</p>
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="app__footer">
                <div className="footer-content">
                    <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ProductsPage; 