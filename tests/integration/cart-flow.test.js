// Tests de integración para el flujo completo del carrito
import {
  getProducts,
  getProductById,
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  getCartTotal,
  clearCart
} from '../../src/data/mockData';

describe('Cart Integration Flow', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Complete Cart Workflow', () => {
    test('should handle complete cart workflow from empty to checkout', () => {
      // 1. Start with empty cart
      let cart = getCart();
      expect(cart.length).toBe(0);
      
      let total = getCartTotal();
      expect(total).toBe(0);

      // 2. Add first product to cart
      const product1 = getProductById(1);
      expect(product1).toBeDefined();
      
      addToCart(1, 2);
      cart = getCart();
      expect(cart.length).toBe(1);
      expect(cart[0].productId).toBe(1);
      expect(cart[0].quantity).toBe(2);
      
      total = getCartTotal();
      expect(total).toBeGreaterThan(0);

      // 3. Add second product to cart
      const product2 = getProductById(2);
      expect(product2).toBeDefined();
      
      addToCart(2, 1);
      cart = getCart();
      expect(cart.length).toBe(2);
      
      total = getCartTotal();
      expect(total).toBeGreaterThan(0);

      // 4. Update quantity of first product
      updateCartItem(1, 3);
      cart = getCart();
      const updatedItem = cart.find(item => item.productId === 1);
      expect(updatedItem.quantity).toBe(3);
      
      total = getCartTotal();
      expect(total).toBeGreaterThan(0);

      // 5. Remove second product
      removeFromCart(2);
      cart = getCart();
      expect(cart.length).toBe(1);
      expect(cart.find(item => item.productId === 2)).toBeUndefined();

      // 6. Clear entire cart
      clearCart();
      cart = getCart();
      expect(cart.length).toBe(0);
      
      total = getCartTotal();
      expect(total).toBe(0);
    });

    test('should handle multiple additions of same product', () => {
      // Add same product multiple times
      addToCart(1, 2);
      addToCart(1, 3);
      addToCart(1, 1);
      
      const cart = getCart();
      expect(cart.length).toBe(1);
      expect(cart[0].quantity).toBe(6); // 2 + 3 + 1
    });

    test('should maintain cart state across operations', () => {
      // Add multiple products
      addToCart(1, 2);
      addToCart(2, 1);
      addToCart(3, 3);
      
      let cart = getCart();
      expect(cart.length).toBe(3);
      
      // Update one item
      updateCartItem(2, 5);
      cart = getCart();
      expect(cart.length).toBe(3);
      
      const updatedItem = cart.find(item => item.productId === 2);
      expect(updatedItem.quantity).toBe(5);
      
      // Other items should remain unchanged
      const unchangedItem = cart.find(item => item.productId === 1);
      expect(unchangedItem.quantity).toBe(2);
    });
  });

  describe('Cart Total Calculations', () => {
    test('should calculate total correctly for mixed cart', () => {
      addToCart(1, 2); // Product 1: 2500 * 2 = 5000
      addToCart(2, 1); // Product 2: 1500 * 1 = 1500
      addToCart(3, 3); // Product 3: 3000 * 3 = 9000
      
      const total = getCartTotal();
      expect(total).toBe(15500);
    });

    test('should handle offer prices in cart', () => {
      // Add product with offer
      addToCart(1, 2); // Product 1 has offer price
      
      const cart = getCart();
      const cartItem = cart.find(item => item.productId === 1);
      const product = getProductById(1);
      
      // Cart should use offer price if available
      if (product.enOferta) {
        expect(cartItem.precio).toBe(product.precioOferta);
      }
    });
  });

  describe('Error Handling', () => {
    test('should handle non-existent product gracefully', () => {
      const result = addToCart(999, 1);
      expect(result).toBeNull();
      
      const cart = getCart();
      expect(cart.length).toBe(0);
    });

    test('should handle invalid quantities', () => {
      addToCart(1, 0);
      let cart = getCart();
      expect(cart.length).toBe(0);
      
      addToCart(1, -1);
      cart = getCart();
      expect(cart.length).toBe(0);
    });

    test('should handle operations on empty cart', () => {
      const result = updateCartItem(1, 2);
      expect(result).toBeNull();
      
      const removeResult = removeFromCart(1);
      expect(Array.isArray(removeResult)).toBe(true);
      expect(removeResult.length).toBe(0);
    });
  });

  describe('Data Persistence', () => {
    test('should persist cart data across operations', () => {
      addToCart(1, 2);
      addToCart(2, 1);
      
      // Simulate page reload by checking localStorage
      const cartData = localStorage.getItem('huerto_cart');
      expect(cartData).toBeDefined();
      
      const parsedCart = JSON.parse(cartData);
      expect(parsedCart.length).toBe(2);
    });

    test('should maintain cart state consistency', () => {
      // Add products
      addToCart(1, 2);
      addToCart(2, 1);
      
      // Get initial state
      const initialCart = getCart();
      const initialTotal = getCartTotal();
      
      // Perform operations
      updateCartItem(1, 3);
      removeFromCart(2);
      
      // Verify final state
      const finalCart = getCart();
      const finalTotal = getCartTotal();
      
      expect(finalCart.length).toBe(1);
      expect(finalCart[0].productId).toBe(1);
      expect(finalCart[0].quantity).toBe(3);
      expect(finalTotal).toBeGreaterThan(0);
    });
  });
});
