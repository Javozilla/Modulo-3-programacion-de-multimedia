import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/LandingPage/App.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './Containers/ProductsPage/products.js';
import CartPage from './Containers/cartPage/cartIndex.js';
import AboutUsPage from './Containers/AboutUsPage/AboutUsPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Containers/LandingPage/App.js" element={<App />} />
        <Route path="/Containers/AboutUsPage/AboutUsPage.js" element={<AboutUsPage />} />
        <Route path="/Containers/ProductsPage/products.js" element={<ProductsPage />} />
        <Route path="/Containers/cartPage/cartIndex.js" element={<CartPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
