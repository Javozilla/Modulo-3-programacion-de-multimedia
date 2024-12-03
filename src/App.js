import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import AboutUsPage from './containers/AboutUsPage';
import CartIndex from './containers/CartIndex';
import Products from './containers/Products';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Landing Page</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/cart" element={<CartIndex />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
