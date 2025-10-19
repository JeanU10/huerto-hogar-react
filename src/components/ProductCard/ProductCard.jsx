// src/components/ProductCard/ProductCard.jsx (ACTUALIZADO)
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../../data/mockData';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    addToCart(product.id, 1);
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Notificación Toast personalizada
    toast.success(
      <div>
        <strong>{product.nombre}</strong> agregado al carrito
        <div className="mt-1 small">Cantidad: 1 {product.unidad}</div>
      </div>,
      {
        icon: "🛒",
        position: "bottom-right"
      }
    );
  };

  const precioFinal = product.enOferta ? product.precioOferta : product.precio;
  
  return (
    <Card className="product-card h-100">
      {product.enOferta && (
        <Badge bg="danger" className="position-absolute top-0 end-0 m-2">
          ¡OFERTA!
        </Badge>
      )}
      <Card.Img 
        variant="top" 
        src={product.imagen} 
        alt={product.nombre}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text className="text-muted small">
          {product.descripcion}
        </Card.Text>
        <div className="mt-auto">
          <div className="mb-2">
            {product.enOferta && (
              <span className="text-decoration-line-through text-muted me-2">
                ${product.precio.toLocaleString()}
              </span>
            )}
            <span className="fw-bold text-success fs-5">
              ${precioFinal.toLocaleString()}
            </span>
            <span className="text-muted ms-2 small">/ {product.unidad}</span>
          </div>
          <div className="text-muted small mb-2">
            Stock: {product.stock} {product.unidad}
          </div>
          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Sin Stock' : 'Añadir al carrito'}
            </Button>
            <Button 
              as={Link} 
              to={`/producto/${product.id}`} 
              variant="outline-success"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
