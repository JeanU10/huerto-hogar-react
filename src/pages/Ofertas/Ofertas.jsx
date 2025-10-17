// src/pages/Ofertas/Ofertas.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getOffertProducts } from '../../data/mockData';

const Ofertas = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(getOffertProducts());
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-4">🔥 Ofertas Especiales</h1>
      <p className="lead mb-5">Aprovecha nuestras mejores ofertas en productos frescos</p>
      
      <Row>
        {offers.length > 0 ? (
          offers.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-muted">No hay ofertas disponibles en este momento.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Ofertas;
