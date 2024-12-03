import React from 'react';
import { Route } from 'react-router-dom';
import App from './';
import AboutUsPage from './Containers';
import ProductsPage from './Containers';
import CartPage from './Containers';

const Routes = () => {
  return (
    <>
        <Route path="/" element={<App />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/cartPage" element={<CartPage />} />
    </>
  );
};

export default Routes; 