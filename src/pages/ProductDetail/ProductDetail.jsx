// src/pages/ProductDetail/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, addToCart } from '../../data/mockData';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate('/productos');
      return;
    }
    setProduct(foundProduct);
  }, [id, navigate]);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`${quantity} ${product.nombre} agregado(s) al carrito`);
  };

  if (!product) return <Container className="py-5">Cargando...</Container>;

  const precioFinal = product.enOferta ? product.precioOferta : product.precio;

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Image 
            src={product.imagen} 
            alt={product.nombre} 
            fluid 
            rounded
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          {product.enOferta && (
            <Badge bg="danger" className="mb-3">¡EN OFERTA!</Badge>
          )}
          <h1 className="mb-3">{product.nombre}</h1>
          <p className="text-muted lead">{product.descripcion}</p>
          
          <div className="my-4">
            {product.enOferta && (
              <div className="text-decoration-line-through text-muted mb-2">
                Precio regular: ${product.precio.toLocaleString()}
              </div>
            )}
            <h3 className="text-success">
              ${precioFinal.toLocaleString()}
            </h3>
          </div>

          <div className="mb-3">
            <strong>Categoría:</strong> {product.categoria}
          </div>

          <div className="mb-4">
            <strong>Stock disponible:</strong> {product.stock} unidades
          </div>

          <div className="mb-4">
            <label className="form-label"><strong>Cantidad:</strong></label>
            <div className="d-flex align-items-center">
              <Button 
                variant="outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="mx-4 fs-4">{quantity}</span>
              <Button 
                variant="outline-secondary"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                +
              </Button>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              Agregar al carrito
            </Button>
            <Button 
              variant="outline-success"
              onClick={() => navigate('/productos')}
            >
              Seguir comprando
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
