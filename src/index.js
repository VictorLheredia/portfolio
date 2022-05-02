import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from "./AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

