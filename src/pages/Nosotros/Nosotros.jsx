// src/pages/Nosotros/Nosotros.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Nosotros = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Sobre Nosotros</h1>
      
      <Row className="mb-5">
        <Col md={6}>
          <h3>Nuestra Historia</h3>
          <p>
            HuertoHogar nació con la misión de conectar a las familias chilenas 
            con productos frescos y orgánicos directamente desde el campo. 
            Creemos en la agricultura sostenible y en apoyar a los productores locales.
          </p>
          <p>
            Desde 2020, hemos trabajado para llevar la frescura del campo a tu mesa, 
            garantizando calidad, sabor y nutrición en cada producto.
          </p>
        </Col>
        <Col md={6}>
          <h3>Nuestra Misión</h3>
          <p>
            Promover una alimentación saludable y sostenible mediante la comercialización 
            de productos orgánicos de alta calidad, apoyando a agricultores locales y 
            cuidando el medio ambiente.
          </p>
          <h3 className="mt-4">Nuestra Visión</h3>
          <p>
            Ser la principal plataforma de comercio de productos orgánicos en Chile, 
            reconocida por nuestra calidad, compromiso ambiental y apoyo a las comunidades agrícolas.
          </p>
        </Col>
      </Row>

      <h3 className="mb-4">Nuestros Valores</h3>
      <Row>
        <Col md={3} className="mb-3">
          <Card className="h-100 text-center p-3">
            <Card.Body>
              <div style={{ fontSize: '2rem' }}>🌱</div>
              <Card.Title>Sostenibilidad</Card.Title>
              <Card.Text>Cuidamos el planeta con prácticas responsables</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="h-100 text-center p-3">
            <Card.Body>
              <div style={{ fontSize: '2rem' }}>🤝</div>
              <Card.Title>Compromiso</Card.Title>
              <Card.Text>Con nuestros clientes y productores</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="h-100 text-center p-3">
            <Card.Body>
              <div style={{ fontSize: '2rem' }}>✨</div>
              <Card.Title>Calidad</Card.Title>
              <Card.Text>Productos frescos de primera calidad</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="h-100 text-center p-3">
            <Card.Body>
              <div style={{ fontSize: '2rem' }}>💚</div>
              <Card.Title>Transparencia</Card.Title>
              <Card.Text>Honestidad en todo lo que hacemos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
