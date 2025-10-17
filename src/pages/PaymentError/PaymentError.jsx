// src/pages/PaymentError/PaymentError.jsx
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PaymentError = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, cartItems, total } = location.state || {};

  const handleRetry = () => {
    navigate('/checkout', { state: { formData, cartItems, total } });
  };

  return (
    <Container className="py-5 text-center">
      <Card className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <div className="text-danger mb-4" style={{ fontSize: '5rem' }}>
            ✗
          </div>
          <h2 className="text-danger mb-3">Error en el Pago</h2>
          <p className="lead">Lo sentimos, no pudimos procesar tu pago</p>
          
          <div className="mt-4">
            <p className="text-muted">
              Puede haber ocurrido un problema con el método de pago.
              Por favor, intenta nuevamente.
            </p>
          </div>

          <div className="mt-4">
            <Button 
              variant="danger" 
              size="lg" 
              className="mt-3"
              onClick={handleRetry}
              disabled={!formData}
            >
              Intentar Nuevamente
            </Button>
            <Button as={Link} to="/carrito" variant="outline-secondary" size="lg" className="mt-3 ms-2">
              Volver al Carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentError;
