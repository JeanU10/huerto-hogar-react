// src/pages/Admin/OrdersList.jsx
import React, { useState, useEffect } from 'react';
import { Container, Table, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getOrders } from '../../data/mockData';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Órdenes</h1>
        <Button as={Link} to="/admin" variant="outline-secondary">
          ← Volver
        </Button>
      </div>

      {orders.length > 0 ? (
        <Table responsive striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Código</th>
              <th>Cliente</th>
              <th>Correo</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td><strong>{order.codigo}</strong></td>
                <td>{order.nombre} {order.apellidos}</td>
                <td>{order.correo}</td>
                <td>{formatDate(order.fecha)}</td>
                <td><strong>${order.total.toLocaleString()}</strong></td>
                <td>
                  <Badge bg="success">{order.estado}</Badge>
                </td>
                <td>{order.items.length} producto(s)</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Card className="text-center py-5">
          <Card.Body>
            <h3 className="text-muted">No hay órdenes registradas</h3>
            <p className="text-muted">Las órdenes aparecerán aquí cuando los clientes realicen compras.</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default OrdersList;
