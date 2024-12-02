import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/LandingPage/App';
import AboutUsPage from './AboutUsPage/AboutUsPage';
import CartPage from './cartPage/cartIndex';
import ProductsPage from './ProductsPage/products';
import App from './Containers/LandingPage/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage/products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutUsPage/AboutUsPage.js" element={<AboutUsPage />} />
        <Route path="/ProductsPage/products.js" element={<ProductsPage />} />
        <Route path="/cartPage/cartIndex.js" element={<CartPage />} />
        <Route path="/LandingPage/App.js" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
