import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsPage.module.css';

const AboutUsPage = () => {
return (
    <div>
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h1>LOGO</h1>
            </div>
            <ul className="app__navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AbotUsPage/AboutUsPage.js">About</Link></li>
                <li><Link to="/ProdctsPage/prodcts.js">Products</Link></li>
                <li><Link to="/cartPage/cartIndex">Shopping Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <div className="app__aboutus">
            <h1>About Us</h1>
            <p>Welcome to our cozy corner of coffee heaven. Since 2020, we've been crafting exceptional coffee experiences 
            with carefully sourced beans from around the world. Our passionate baristas take pride in serving the perfect cup, 
            whether you're starting your day, meeting friends, or seeking a quiet moment with your favorite brew. 
            We believe in sustainable practices, community connections, and the simple joy that comes with every perfectly crafted cup.</p>
        </div>

        <footer className="app__footer">
            <div className="app__footer-content">
                <div className="app__footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@coffeeshop.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
                <div className="app__footer-hours">
                    <h3>Hours</h3>
                    <p>Mon-Fri: 7am - 8pm</p>
                    <p>Sat-Sun: 8am - 9pm</p>
                </div>
            </div>
            <div className="app__footer-copyright">
                <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
            </div>
        </footer>
    </div>
);
}

export default AboutUsPage;