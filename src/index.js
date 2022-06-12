import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CategoryList from "./pages/categoryList";
import ProductList from "./pages/productList";
import Complain from "./pages/complain";
import Profile from "./pages/profile";
import Login from "./pages/login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="category" element={<CategoryList />} />
              <Route path="product" element={<ProductList />} />
              <Route path="complain" element={<Complain />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);