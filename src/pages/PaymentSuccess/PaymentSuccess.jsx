// src/pages/PaymentSuccess/PaymentSuccess.jsx
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <Container className="py-5 text-center">
      <Card className="mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <div className="text-success mb-4" style={{ fontSize: '5rem' }}>
            ✓
          </div>
          <h2 className="text-success mb-3">¡Pago Exitoso!</h2>
          <p className="lead">Tu pedido ha sido procesado correctamente</p>
          
          {order && (
            <div className="mt-4">
              <p><strong>Código de pedido:</strong> {order.codigo}</p>
              <p><strong>Total pagado:</strong> ${order.total.toLocaleString()}</p>
              <p className="text-muted">
                Recibirás un correo de confirmación en {order.correo}
              </p>
            </div>
          )}

          <div className="mt-4">
            <p>¡Gracias por tu compra! Tus productos llegarán pronto.</p>
            <Button as={Link} to="/" variant="success" size="lg" className="mt-3">
              Volver al Inicio
            </Button>
            <Button as={Link} to="/productos" variant="outline-success" size="lg" className="mt-3 ms-2">
              Seguir Comprando
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;
