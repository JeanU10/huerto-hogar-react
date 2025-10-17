// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Categories from './pages/Categories/Categories';
import Ofertas from './pages/Ofertas/Ofertas';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import PaymentError from './pages/PaymentError/PaymentError';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/categoria/:slug" element={<Products />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pago-exitoso" element={<PaymentSuccess />} />
            <Route path="/pago-error" element={<PaymentError />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
