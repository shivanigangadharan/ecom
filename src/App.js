import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import ProductList from './pages/ProductList/productList';
import Navbar from './components/navbar/navbar';
import Cart from './pages/cart/cart';
import Wishlist from './pages/wishlist/wishlist';

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
