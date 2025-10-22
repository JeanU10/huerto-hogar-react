// Tests unitarios para operaciones CRUD del carrito
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartTotal
} from '../../src/data/mockData';

describe('Cart CRUD Operations', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  describe('GET Operations', () => {
    test('should get empty cart initially', () => {
      const cart = getCart();
      expect(Array.isArray(cart)).toBe(true);
      expect(cart.length).toBe(0);
    });

    test('should get cart total', () => {
      const total = getCartTotal();
      expect(typeof total).toBe('number');
      expect(total).toBe(0);
    });
  });

  describe('CREATE Operations (Add to Cart)', () => {
    test('should add new item to cart', () => {
      const result = addToCart(1, 2);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(1);
      expect(result[0].productId).toBe(1);
      expect(result[0].quantity).toBe(2);
    });

    test('should increase quantity when adding existing item', () => {
      addToCart(1, 2);
      const result = addToCart(1, 3);
      
      expect(result.length).toBe(1);
      expect(result[0].quantity).toBe(5); // 2 + 3
    });

    test('should add multiple different items to cart', () => {
      addToCart(1, 2);
      addToCart(2, 1);
      
      const cart = getCart();
      expect(cart.length).toBe(2);
    });

    test('should return null for non-existent product', () => {
      const result = addToCart(999, 1);
      expect(result).toBeNull();
    });
  });

  describe('UPDATE Operations', () => {
    test('should update item quantity', () => {
      addToCart(1, 2);
      const result = updateCartItem(1, 5);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result[0].quantity).toBe(5);
    });

    test('should return null for non-existent item update', () => {
      const result = updateCartItem(999, 5);
      expect(result).toBeNull();
    });

    test('should maintain other items when updating one', () => {
      addToCart(1, 2);
      addToCart(2, 3);
      
      updateCartItem(1, 5);
      const cart = getCart();
      
      expect(cart.length).toBe(2);
      expect(cart.find(item => item.productId === 2).quantity).toBe(3);
    });
  });

  describe('DELETE Operations', () => {
    test('should remove item from cart', () => {
      addToCart(1, 2);
      addToCart(2, 1);
      
      const result = removeFromCart(1);
      expect(result.length).toBe(1);
      expect(result.find(item => item.productId === 1)).toBeUndefined();
    });

    test('should clear entire cart', () => {
      addToCart(1, 2);
      addToCart(2, 1);
      
      const result = clearCart();
      expect(result.length).toBe(0);
    });

    test('should return empty array when removing from empty cart', () => {
      const result = removeFromCart(1);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('Cart Total Calculations', () => {
    test('should calculate total for single item', () => {
      addToCart(1, 2); // Product 1 costs 2500, quantity 2
      const total = getCartTotal();
      expect(total).toBe(5000);
    });

    test('should calculate total for multiple items', () => {
      addToCart(1, 2); // 2500 * 2 = 5000
      addToCart(2, 1); // 1500 * 1 = 1500
      const total = getCartTotal();
      expect(total).toBe(6500);
    });

    test('should return zero for empty cart', () => {
      const total = getCartTotal();
      expect(total).toBe(0);
    });

    test('should update total after quantity changes', () => {
      addToCart(1, 2);
      let total = getCartTotal();
      expect(total).toBe(5000);
      
      updateCartItem(1, 4);
      total = getCartTotal();
      expect(total).toBe(10000);
    });
  });

  describe('Data Persistence', () => {
    test('should persist cart data in localStorage', () => {
      addToCart(1, 2);
      const cartData = localStorage.getItem('huerto_cart');
      expect(cartData).toBeDefined();
      
      const parsedCart = JSON.parse(cartData);
      expect(parsedCart.length).toBe(1);
    });

    test('should maintain cart state across operations', () => {
      addToCart(1, 2);
      addToCart(2, 1);
      
      // Simulate page reload by clearing and re-reading
      const cart1 = getCart();
      expect(cart1.length).toBe(2);
      
      updateCartItem(1, 3);
      const cart2 = getCart();
      expect(cart2.length).toBe(2);
      expect(cart2.find(item => item.productId === 1).quantity).toBe(3);
    });
  });
});
