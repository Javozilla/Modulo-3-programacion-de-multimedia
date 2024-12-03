import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Routes from './routes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RouterRoutes>
        <Routes />
        <Route path="*" element={<App />} />
      </RouterRoutes>
    </Router>
  </React.StrictMode>
);
