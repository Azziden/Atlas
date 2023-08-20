import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/main/main.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Discover from "./pages/discover/discover";
import Header from "./components/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="discover" element={<Discover />} />
            </Routes>
    </Router>
  </React.StrictMode>
);

