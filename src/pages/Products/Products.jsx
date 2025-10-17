// src/pages/Products/Products.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProducts, getCategories } from '../../data/mockData';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('nombre');

  useEffect(() => {
    setProducts(getProducts());
    setCategories(getCategories());
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filtrar por categoría
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(p => p.categoria === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar
    switch(sortBy) {
      case 'precio-asc':
        filtered.sort((a, b) => {
          const precioA = a.enOferta ? a.precioOferta : a.precio;
          const precioB = b.enOferta ? b.precioOferta : b.precio;
          return precioA - precioB;
        });
        break;
      case 'precio-desc':
        filtered.sort((a, b) => {
          const precioA = a.enOferta ? a.precioOferta : a.precio;
          const precioB = b.enOferta ? b.precioOferta : b.precio;
          return precioB - precioA;
        });
        break;
      case 'nombre':
      default:
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);

  return (
    <Container className="py-5">
      <h1 className="mb-4">Nuestros Productos</h1>
      
      {/* Filtros */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Buscar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="todos">Todas las categorías</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.slug}>{cat.nombre}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Ordenar por</Form.Label>
            <Form.Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="nombre">Nombre</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Lista de productos */}
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Col key={product.id} md={4} sm={6} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-muted">No se encontraron productos.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Products;
