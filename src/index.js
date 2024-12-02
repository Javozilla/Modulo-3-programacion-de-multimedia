import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/LandingPage/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage/products';
import CartPage from './cartPage/cartIndex';
import AboutUsPage from './AboutUsPage/AboutUsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/LandingPage/App" element={<App />} />
        <Route path="/AboutUsPage/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/ProductsPage/products" element={<ProductsPage />} />
        <Route path="/cartPage/cartIndex" element={<CartPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
