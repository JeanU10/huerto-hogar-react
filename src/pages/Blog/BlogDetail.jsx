// src/pages/Blog/BlogDetail.jsx
import React, { useState, useEffect } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogById } from '../../data/mockData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = getBlogById(id);
    if (!foundBlog) {
      navigate('/blog');
      return;
    }
    setBlog(foundBlog);
  }, [id, navigate]);

  if (!blog) return <Container className="py-5">Cargando...</Container>;

  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <Button variant="outline-secondary" onClick={() => navigate('/blog')} className="mb-4">
        ← Volver al blog
      </Button>
      
      <h1 className="mb-3">{blog.titulo}</h1>
      <p className="text-muted mb-4">Por {blog.autor} • {blog.fecha}</p>
      
      <Image src={blog.imagen} fluid rounded className="mb-4" />
      
      <div className="blog-content">
        <p>{blog.contenido}</p>
      </div>
    </Container>
  );
};

export default BlogDetail;
