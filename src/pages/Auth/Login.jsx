// src/pages/Auth/Login.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ correo: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, password } = formData;

    // Validación de admin
    if (correo === 'admin@huertohogar.cl' && password === 'admin123') {
      login({ email: correo, role: 'admin' });
      return navigate('/admin');
    }

    // Validación de usuario normal
    if (correo && password) {
      login({ email: correo, role: 'user' });
      return navigate('/');
    }

    setError('Por favor completa todos los campos');
  };

  return (
    <Container className="py-5" style={{ maxWidth: '500px' }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
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
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mb-3">
              Iniciar Sesión
            </Button>

            <p className="text-center">
              ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
