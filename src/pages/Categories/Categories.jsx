// src/pages/Categories/Categories.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCategories } from '../../data/mockData';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-4">Nuestras Categorías</h1>
      <p className="lead mb-5">Explora nuestros productos organizados por categorías</p>
      
      <Row>
        {categories.map(category => (
          <Col key={category.id} md={6} lg={3} className="mb-4">
            <Card 
              as={Link} 
              to={`/categoria/${category.slug}`}
              className="category-card text-center h-100 text-decoration-none"
              style={{ transition: 'transform 0.3s' }}
            >
              <Card.Body>
                <div className="mb-3">
                  <img 
                    src={category.imagen} 
                    alt={category.nombre}
                    className="img-fluid"
                    style={{ maxWidth: '150px' }}
                  />
                </div>
                <Card.Title className="h4">{category.nombre}</Card.Title>
                <Card.Text className="text-muted">
                  {category.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
