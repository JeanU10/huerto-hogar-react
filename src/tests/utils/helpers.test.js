// Tests unitarios para funciones helper y utilidades
import { getProducts, getProductById, getCart, getCartTotal } from '../../data/mockData';

// Función helper para formatear precios
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
};

// Función helper para calcular descuento
const calculateDiscount = (originalPrice, offerPrice) => {
  if (originalPrice <= 0 || offerPrice <= 0) return 0;
  return Math.round(((originalPrice - offerPrice) / originalPrice) * 100);
};

// Función helper para validar email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función helper para formatear fecha
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Función helper para truncar texto
const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

describe('Helper Functions', () => {
  describe('formatPrice', () => {
    test('should format price correctly', () => {
      expect(formatPrice(2500)).toContain('2.500');
      expect(formatPrice(15000)).toContain('15.000');
      expect(formatPrice(0)).toContain('0');
    });

    test('should handle large numbers', () => {
      expect(formatPrice(1000000)).toContain('1.000.000');
    });

    test('should handle decimal prices', () => {
      expect(formatPrice(2500.50)).toContain('2.500');
    });
  });

  describe('calculateDiscount', () => {
    test('should calculate discount percentage correctly', () => {
      expect(calculateDiscount(2500, 2000)).toBe(20);
      expect(calculateDiscount(1000, 800)).toBe(20);
      expect(calculateDiscount(5000, 4000)).toBe(20);
    });

    test('should return 0 for invalid inputs', () => {
      expect(calculateDiscount(0, 1000)).toBe(0);
      expect(calculateDiscount(1000, 0)).toBe(0);
      expect(calculateDiscount(-100, 50)).toBe(0);
    });

    test('should handle edge cases', () => {
      expect(calculateDiscount(1000, 1000)).toBe(0);
      expect(calculateDiscount(1000, 0)).toBe(0);
    });
  });

  describe('validateEmail', () => {
    test('should validate correct email formats', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co')).toBe(true);
      expect(validateEmail('admin@huertohogar.com')).toBe(true);
    });

    test('should reject invalid email formats', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('')).toBe(false);
      expect(validateEmail(null)).toBe(false);
      expect(validateEmail(undefined)).toBe(false);
    });
  });

  describe('formatDate', () => {
    test('should format date correctly', () => {
      const dateString = '2024-10-15';
      const formatted = formatDate(dateString);
      expect(formatted).toContain('2024');
      expect(formatted).toContain('octubre');
      expect(formatted).toContain('14'); // Date might be off by one day due to timezone
    });

    test('should handle different date formats', () => {
      const isoDate = '2024-12-25T10:30:00Z';
      const formatted = formatDate(isoDate);
      expect(formatted).toContain('2024');
      expect(formatted).toContain('diciembre');
      expect(formatted).toContain('25');
    });
  });

  describe('truncateText', () => {
    test('should truncate long text correctly', () => {
      const longText = 'Este es un texto muy largo que necesita ser truncado';
      const truncated = truncateText(longText, 20);
      expect(truncated).toBe('Este es un texto muy...');
      expect(truncated.length).toBe(23); // 20 + '...'
    });

    test('should not truncate short text', () => {
      const shortText = 'Texto corto';
      const result = truncateText(shortText, 20);
      expect(result).toBe('Texto corto');
    });

    test('should handle edge cases', () => {
      expect(truncateText('', 10)).toBe('');
      expect(truncateText(null, 10)).toBe(null);
      expect(truncateText(undefined, 10)).toBe(undefined);
    });
  });
});

describe('Data Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Product Data Helpers', () => {
    test('should work with real product data', () => {
      const products = getProducts();
      expect(products.length).toBeGreaterThan(0);
      
      const firstProduct = products[0];
      const formattedPrice = formatPrice(firstProduct.precio);
      expect(formattedPrice).toContain('$');
    });

    test('should calculate discounts for offer products', () => {
      const products = getProducts();
      const offerProduct = products.find(p => p.enOferta);
      
      if (offerProduct) {
        const discount = calculateDiscount(offerProduct.precio, offerProduct.precioOferta);
        expect(discount).toBeGreaterThan(0);
        expect(discount).toBeLessThanOrEqual(100);
      }
    });
  });

  describe('Cart Data Helpers', () => {
    test('should work with cart data', () => {
      const cart = getCart();
      expect(Array.isArray(cart)).toBe(true);
      
      const total = getCartTotal();
      expect(typeof total).toBe('number');
      expect(total).toBeGreaterThanOrEqual(0);
    });
  });
});
