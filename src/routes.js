import React from 'react';
import { Route } from 'react-router-dom';
import App from './Containers/LandingPage/App';
import AboutUsPage from './Containers/AboutUsPage/AboutUsPage';
import ProductsPage from './ProductsPage/products';
import CartPage from './cartPage/cartIndex';

const Routes = () => {
  return (
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </>
  );
};

export default Routes; 