import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Containers/LandingPage';
import ProductsPage from './Containers/ProductsPage';
import CartIndex from './Containers/cartPage/cartIndex';
import AboutUsPage from './Containers/AboutUsPage';
import NotFound from './Containers/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/ProductsPage" element={<ProductsPage />} />
            <Route path="/cartPage" element={<CartIndex />} />
            <Route path="/AboutUsPage" element={<AboutUsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes; 