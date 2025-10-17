// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getFeaturedProducts, getCategories } from '../../data/mockData';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
    setCategories(getCategories());
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-success text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">
                ¡Descubre la frescura del campo con HuertoHogar!
              </h1>
              <p className="lead mt-3">
                Directamente del campo a tu mesa, garantizando la máxima frescura 
                y calidad en cada producto.
              </p>
              <p className="mt-3">
                Conéctate con la naturaleza y lleva lo mejor del campo a tu mesa.
              </p>
              <Button 
                as={Link} 
                to="/productos" 
                variant="light" 
                size="lg" 
                className="mt-3"
              >
                Ver Productos
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <div className="hero-image">
                🌾🥕🍎🥬
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
          <Row>
            <Col md={3} className="text-center mb-4">
              <div className="benefit-icon mb-3">📦</div>
              <h5>Productos Frescos</h5>
              <p>Directamente del campo a tu mesa, garantizando máxima frescura.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="benefit-icon mb-3">🚚</div>
              <h5>Cobertura Nacional</h5>
              <p>Entregamos en más de 9 puntos del país.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="benefit-icon mb-3">🌱</div>
              <h5>100% Orgánico</h5>
              <p>Cultivados sin pesticidas ni químicos.</p>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="benefit-icon mb-3">🤝</div>
              <h5>Apoyo Local</h5>
              <p>Conectamos con productores locales.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Explora nuestras categorías</h2>
          <Row>
            {categories.map(category => (
              <Col key={category.id} md={3} sm={6} className="mb-4">
                <Card 
                  as={Link} 
                  to={`/categoria/${category.slug}`}
                  className="category-card text-center h-100 text-decoration-none"
                >
                  <Card.Body>
                    <div className="category-image mb-3">
                      <img 
                        src={category.imagen} 
                        alt={category.nombre}
                        className="img-fluid"
                      />
                    </div>
                    <Card.Title>{category.nombre}</Card.Title>
                    <Card.Text className="text-muted">
                      {category.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5">
        <Container>
          <h2 className="text-center mb-4">Productos Destacados</h2>
          <Row>
            {featuredProducts.map(product => (
              <Col key={product.id} md={4} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/productos" variant="success" size="lg">
              Ver todos los productos
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Lo que dicen nuestros clientes</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="mb-3">
                    "Los productos de HuertoHogar son increíblemente frescos. 
                    La diferencia se nota desde el primer bocado."
                  </p>
                  <footer className="text-muted">- María González</footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="mb-3">
                    "Excelente servicio y productos de calidad. 
                    Ahora toda mi familia come más saludable."
                  </p>
                  <footer className="text-muted">- Carlos Pérez</footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="mb-3">
                    "Me encanta poder apoyar a los productores locales 
                    mientras cuido mi alimentación."
                  </p>
                  <footer className="text-muted">- Ana Martínez</footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-success text-white py-5">
        <Container className="text-center">
          <h2 className="mb-3">
            ¡Únete a nosotros y disfruta de productos frescos y saludables!
          </h2>
          <p className="lead mb-4">
            Directo a tu hogar
          </p>
          <Button as={Link} to="/register" variant="light" size="lg">
            Crear Cuenta
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
