// src/pages/Cart/Cart.jsx
import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getCart, updateCartItem, removeFromCart, clearCart, getCartTotal } from '../../data/mockData';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = getCart();
    const totalAmount = getCartTotal();
    setCartItems(cart);
    setTotal(totalAmount);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartItem(productId, newQuantity);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      clearCart();
      loadCart();
      window.dispatchEvent(new Event('cartUpdated'));
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="text-muted mt-3">¡Agrega productos para comenzar tu compra!</p>
        <Button as={Link} to="/productos" variant="success" size="lg" className="mt-3">
          Ver Productos
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Carrito de Compras</h1>
      
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.productId}>
              <td>
                <Image 
                  src={item.imagen} 
                  alt={item.nombre} 
                  style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                  rounded
                />
              </td>
              <td>{item.nombre}</td>
              <td>${item.precio.toLocaleString()}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>${(item.precio * item.quantity).toLocaleString()}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => handleRemove(item.productId)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div>
          <Button variant="outline-danger" onClick={handleClearCart}>
            Vaciar Carrito
          </Button>
        </div>
        <div className="text-end">
          <h4>Total: ${total.toLocaleString()}</h4>
          <Button 
            variant="success" 
            size="lg" 
            className="mt-2"
            onClick={handleCheckout}
          >
            Proceder al Pago
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
