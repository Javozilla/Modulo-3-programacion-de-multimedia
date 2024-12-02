import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/LandingPage/App.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage/products.js';
import CartPage from './cartPage/cartIndex.js';
import AboutUsPage from './AboutUsPage/AboutUsPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LandingPage/App.js" element={<App />} />
        <Route path="/AboutUsPage/AboutUsPage.js" element={<AboutUsPage />} />
        <Route path="/ProductsPage/products.js" element={<ProductsPage />} />
        <Route path="/cartPage/cartIndex.js" element={<CartPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
