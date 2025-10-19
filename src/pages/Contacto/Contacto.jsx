// src/pages/Contacto/Contacto.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);

    toast.success(
      <div>
        <strong>¡Mensaje enviado!</strong>
        <div className="small mt-1">Te responderemos pronto a {formData.correo}</div>
      </div>,
      { icon: "📧" }
    );

    setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Contáctanos</h1>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <h4 className="mb-3">Envíanos un mensaje</h4>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Enviar mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <h4 className="mb-3">Información de Contacto</h4>
              
              <div className="mb-3">
                <strong>📍 Dirección:</strong>
                <p>Av. Los Crisantemos 1234, Cerrillos, Santiago</p>
              </div>

              <div className="mb-3">
                <strong>📞 Teléfono:</strong>
                <p>+56 9 1234 5678</p>
              </div>

              <div className="mb-3">
                <strong>✉️ Email:</strong>
                <p>contacto@huertohogar.cl</p>
              </div>

              <div className="mb-3">
                <strong>🕐 Horario de atención:</strong>
                <p>Lunes a Viernes: 9:00 - 18:00<br/>Sábados: 10:00 - 14:00</p>
              </div>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body>
              <h5>Síguenos en redes sociales</h5>
              <div className="d-flex gap-3 mt-3">
                <Button variant="outline-primary">Facebook</Button>
                <Button variant="outline-danger">Instagram</Button>
                <Button variant="outline-info">Twitter</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
