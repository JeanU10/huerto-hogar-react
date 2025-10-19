// src/pages/Cart/Cart.jsx (ACTUALIZADO con notificaciones)
import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

  const handleQuantityChange = (productId, newQuantity, productName) => {
    if (newQuantity < 1) return;
    updateCartItem(productId, newQuantity);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
    
    toast.info(`Cantidad actualizada: ${productName}`, {
      icon: "🔄",
      autoClose: 2000
    });
  };

  const handleRemove = (productId, productName) => {
    removeFromCart(productId);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
    
    toast.warning(`${productName} eliminado del carrito`, {
      icon: "🗑️"
    });
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      clearCart();
      loadCart();
      window.dispatchEvent(new Event('cartUpdated'));
      
      toast.error('Carrito vaciado', {
        icon: "🧹"
      });
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning('El carrito está vacío', {
        icon: "⚠️"
      });
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <Container className="py-5 text-center">
        <div style={{ fontSize: '5rem' }}>🛒</div>
        <h2 className="mt-3">Tu carrito está vacío</h2>
        <p className="text-muted mt-3">¡Agrega productos para comenzar tu compra!</p>
        <Button as={Link} to="/productos" variant="success" size="lg" className="mt-3">
          🌱 Explorar Productos
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">🛒 Carrito de Compras</h1>
      
      <Table responsive striped bordered hover>
        <thead className="table-dark">
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
              <td>
                <strong>{item.nombre}</strong>
                <div className="small text-muted">{item.unidad}</div>
              </td>
              <td>${item.precio.toLocaleString()}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => handleQuantityChange(item.productId, item.quantity - 1, item.nombre)}
                  >
                    −
                  </Button>
                  <span className="mx-3 fw-bold">{item.quantity}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1, item.nombre)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td className="fw-bold">${(item.precio * item.quantity).toLocaleString()}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={() => handleRemove(item.productId, item.nombre)}
                >
                  🗑️ Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-4 p-4 bg-light rounded">
        <div>
          <Button variant="outline-danger" onClick={handleClearCart}>
            🧹 Vaciar Carrito
          </Button>
          <Button 
            as={Link} 
            to="/productos" 
            variant="outline-success" 
            className="ms-2"
          >
            ← Seguir Comprando
          </Button>
        </div>
        <div className="text-end">
          <h4 className="mb-3">
            Total: <span className="text-success">${total.toLocaleString()}</span>
          </h4>
          <Button 
            variant="success" 
            size="lg" 
            onClick={handleCheckout}
          >
            💳 Proceder al Pago
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
