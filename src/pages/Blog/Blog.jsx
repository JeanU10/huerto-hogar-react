// src/pages/Blog/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../data/mockData';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  return (
    <Container className="py-5">
      <h1 className="mb-4">Blog de HuertoHogar</h1>
      <p className="lead mb-5">Consejos, recetas y novedades del mundo orgánico</p>
      
      <Row>
        {blogs.map(blog => (
          <Col key={blog.id} md={6} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={blog.imagen} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{blog.titulo}</Card.Title>
                <Card.Text className="text-muted small">
                  Por {blog.autor} • {blog.fecha}
                </Card.Text>
                <Card.Text>
                  {blog.contenido.substring(0, 150)}...
                </Card.Text>
                <Button 
                  as={Link} 
                  to={`/blog/${blog.id}`} 
                  variant="outline-success"
                  className="mt-auto"
                >
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
