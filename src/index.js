import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Importing the routes

// Rendering the application
ReactDOM.render(
    <BrowserRouter>
        <AppRoutes /> {/* Main routing component */}
    </BrowserRouter>,
    document.getElementById('root') // The root element in the HTML
);
