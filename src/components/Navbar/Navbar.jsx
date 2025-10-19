// src/components/Navbar/Navbar.jsx (CON AUTH)
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { getCart, getCartTotal } from '../../data/mockData';
import './Navbar.css';

const NavbarComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { isAuthenticated, role, email, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    updateCartInfo();
    window.addEventListener('cartUpdated', updateCartInfo);
    return () => window.removeEventListener('cartUpdated', updateCartInfo);
  }, []);

  const updateCartInfo = () => {
    const cart = getCart();
    const total = getCartTotal();
    setCartItems(cart);
    setCartTotal(total);
  };

  const handleLogout = () => {
    logout();
    toast.info('Sesión cerrada', { icon: '👋' });
    navigate('/');
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
            {role === 'admin' && (
              <Nav.Link as={Link} to="/admin">👨‍💼 Admin</Nav.Link>
            )}
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Item className="d-flex align-items-center text-white me-3">
                  <small>👤 {email}</small>
                </Nav.Item>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                  Salir
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Crear Cuenta</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/carrito" className="position-relative ms-2">
              🛒 ${cartTotal.toLocaleString()}
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
