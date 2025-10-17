// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>🌱 HuertoHogar</h5>
            <p className="text-muted">
              Tu tienda de productos frescos y orgánicos directamente del campo.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/productos" className="text-muted text-decoration-none">Productos</Link></li>
              <li><Link to="/categorias" className="text-muted text-decoration-none">Categorías</Link></li>
              <li><Link to="/ofertas" className="text-muted text-decoration-none">Ofertas</Link></li>
              <li><Link to="/nosotros" className="text-muted text-decoration-none">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-muted text-decoration-none">Contacto</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contacto</h5>
            <p className="text-muted mb-1">📍 Cerrillos, Santiago</p>
            <p className="text-muted mb-1">📞 +56 9 1234 5678</p>
            <p className="text-muted">✉️ contacto@huertohogar.cl</p>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col className="text-center text-muted">
            <p className="mb-0">&copy; 2024 HuertoHogar. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
