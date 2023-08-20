import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/main/main.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
  </React.StrictMode>
);

