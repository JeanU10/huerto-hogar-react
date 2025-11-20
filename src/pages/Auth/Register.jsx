// src/pages/Auth/Register.jsx
import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      toast.error('Las contraseñas no coinciden', { icon: "❌" });
      return;
    }

    setIsLoading(true);
    
    // ✅ CORREGIDO: Enviar los campos con los nombres correctos
    const result = await register({
      username: formData.nombre,  // ✅ Cambié 'nombre' por 'username'
      email: formData.correo,      // ✅ Ya estaba correcto
      password: formData.password, // ✅ Ya estaba correcto
      role: 'user'                 // ✅ Agregué el rol por defecto
    });
    
    setIsLoading(false);

    if (result.success) {
      toast.success(
        <div>
          <strong>¡Cuenta creada exitosamente!</strong>
          <div className="small mt-1">Bienvenido, {formData.nombre}</div>
        </div>,
        { icon: "🎉" }
      );
      setTimeout(() => navigate('/'), 2000);
    } else {
      setError(result.error || 'Error al registrar usuario');
      toast.error(result.error || 'Error al registrar usuario', { icon: "❌" });
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: '500px' }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Crear Cuenta</h2>

          {error && <p className="text-danger text-center">{error}</p>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ej: Juan Pérez"
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
                placeholder="ejemplo@correo.com"
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
                minLength="6"
                placeholder="Mínimo 6 caracteres"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Repite tu contraseña"
              />
            </Form.Group>

            <Button 
              variant="success" 
              type="submit" 
              className="w-100 mb-3" 
              disabled={isLoading}
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </Button>

            <p className="text-center">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
