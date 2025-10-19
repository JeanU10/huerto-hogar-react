// src/pages/Auth/Login.jsx (CON AUTH)
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ correo: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { correo, password } = formData;

    // Credenciales de administrador
    if (correo === 'admin@huertohogar.cl' && password === 'admin123') {
      login({ email: correo, role: 'admin' });
      toast.success('¡Bienvenido Administrador!', { icon: '👨‍💼' });
      navigate('/admin');
      return;
    }

    // Usuario normal (cualquier otra combinación válida)
    if (correo && password) {
      login({ email: correo, role: 'user' });
      toast.success(`¡Bienvenido de nuevo!`, { icon: '👋' });
      navigate('/');
      return;
    }

    setError('Por favor completa todos los campos');
    toast.error('Credenciales inválidas', { icon: '❌' });
  };

  return (
    <Container className="py-5" style={{ maxWidth: '500px' }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          
          {error && <Alert variant="danger">{error}</Alert>}

          <Alert variant="info">
            <strong>Credenciales de prueba:</strong><br/>
            <small>Admin: admin@huertohogar.cl / admin123</small><br/>
            <small>Usuario: cualquier correo / cualquier contraseña</small>
          </Alert>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="admin@huertohogar.cl"
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
                placeholder="admin123"
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
