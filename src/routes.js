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
        <Route path="/Containers/LandingPage/App.js" element={<App />} />
        <Route path="/Containers/AboutUsPage/AboutUsPage.js" element={<AboutUsPage />} />
        <Route path="/Containers/ProductsPage/products.js" element={<ProductsPage />} />
        <Route path="/Containers/cartPage/cartIndex.js" element={<CartPage />} />
    </>
  );
};

export default Routes; 