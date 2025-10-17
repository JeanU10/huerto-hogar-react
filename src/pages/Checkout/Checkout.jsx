// src/pages/Checkout/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCart, getCartTotal, createOrder, clearCart } from '../../data/mockData';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    calle: '',
    departamento: '',
    region: 'Región Metropolitana de Santiago',
    comuna: '',
    indicaciones: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cart = getCart();
    const totalAmount = getCartTotal();
    
    if (cart.length === 0) {
      navigate('/carrito');
      return;
    }
    
    setCartItems(cart);
    setTotal(totalAmount);
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellidos.trim()) newErrors.apellidos = 'Los apellidos son requeridos';
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }
    if (!formData.calle.trim()) newErrors.calle = 'La dirección es requerida';
    if (!formData.comuna.trim()) newErrors.comuna = 'La comuna es requerida';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulación de pago (70% éxito, 30% fallo)
    const paymentSuccess = Math.random() > 0.3;

    if (paymentSuccess) {
      const order = createOrder({
        ...formData,
        items: cartItems,
        total: total
      });
      clearCart();
      window.dispatchEvent(new Event('cartUpdated'));
      navigate('/pago-exitoso', { state: { order } });
    } else {
      navigate('/pago-error', { state: { formData, cartItems, total } });
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Checkout - Completar Compra</h1>
      
      <Row>
        <Col md={7}>
          <Card className="mb-4">
            <Card.Body>
              <h4 className="mb-3">Información del Cliente</h4>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre *</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        isInvalid={!!errors.nombre}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.nombre}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellidos *</Form.Label>
                      <Form.Control
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        isInvalid={!!errors.apellidos}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.apellidos}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    isInvalid={!!errors.correo}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.correo}
                  </Form.Control.Feedback>
                </Form.Group>

                <h5 className="mt-4 mb-3">Dirección de Entrega</h5>

                <Form.Group className="mb-3">
                  <Form.Label>Calle y Número *</Form.Label>
                  <Form.Control
                    type="text"
                    name="calle"
                    placeholder="Ej: Los Crisantemos 1234, Edificio Norte"
                    value={formData.calle}
                    onChange={handleChange}
                    isInvalid={!!errors.calle}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.calle}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Región</Form.Label>
                      <Form.Select
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                      >
                        <option>Región Metropolitana de Santiago</option>
                        <option>Región de Valparaíso</option>
                        <option>Región del Biobío</option>
                        <option>Región de Los Lagos</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Comuna *</Form.Label>
                      <Form.Control
                        type="text"
                        name="comuna"
                        placeholder="Ej: Cerrillos"
                        value={formData.comuna}
                        onChange={handleChange}
                        isInvalid={!!errors.comuna}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.comuna}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Departamento (opcional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="departamento"
                    placeholder="Ej: Depto 603"
                    value={formData.departamento}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Indicaciones para la entrega (opcional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="indicaciones"
                    placeholder="Ej: Entre calles, color del edificio, no tiene timbre"
                    value={formData.indicaciones}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="success" size="lg" type="submit" className="w-100">
                  Pagar ahora ${total.toLocaleString()}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card>
            <Card.Body>
              <h4 className="mb-3">Resumen de Compra</h4>
              <Table size="sm">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cant.</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.productId}>
                      <td>{item.nombre}</td>
                      <td>{item.quantity}</td>
                      <td>${(item.precio * item.quantity).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total a pagar:</h5>
                <h5 className="text-success">${total.toLocaleString()}</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
