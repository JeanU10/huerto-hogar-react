// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { getCart, getCartTotal } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const NavbarComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // 🔐 AuthContext
  const { isAuthenticated, role, logout } = useAuth();

  useEffect(() => {
    updateCartInfo();
    window.addEventListener('cartUpdated', updateCartInfo);
    return () => {
      window.removeEventListener('cartUpdated', updateCartInfo);
    };
  }, []);

  const updateCartInfo = () => {
    const cart = getCart();
    const total = getCartTotal();
    setCartItems(cart);
    setCartTotal(total);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="success" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🌱 HuertoHogar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

            {/* 🔐 Mostrar ruta Admin solo si el usuario es admin */}
            {role === 'admin' && (
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            )}
          </Nav>

          <Nav>
            {/* 🔐 Mostrar opciones según autenticación */}
            {isAuthenticated ? (
              <Nav.Link onClick={logout}>Salir</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Crear Cuenta</Nav.Link>
              </>
            )}

            <Nav.Link as={Link} to="/carrito" className="position-relative">
              🛒 Carrito ${cartTotal.toLocaleString()}
              {cartItemCount > 0 && (
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
