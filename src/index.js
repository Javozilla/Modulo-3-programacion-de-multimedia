import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Importing the routes

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application
root.render(
    <BrowserRouter>
        <AppRoutes /> {/* Main routing component */}
    </BrowserRouter>
);
