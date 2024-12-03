import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import ProductsPage from './containers/ProductsPage';
import CartIndex from './containers/cartPage/cartIndex';
import AboutUsPage from './containers/AboutUsPage';
import NotFound from './containers/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartIndex />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes; 