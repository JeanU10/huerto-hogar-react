// src/components/CategoryCard/CategoryCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
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
  );
};

export default CategoryCard;
