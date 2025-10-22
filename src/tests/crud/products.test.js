// Tests unitarios para operaciones CRUD de productos
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getOffertProducts,
  getFeaturedProducts
} from '../../data/mockData';

describe('Product CRUD Operations', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  describe('GET Operations', () => {
    test('should get all products', () => {
      const products = getProducts();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });

    test('should get product by id', () => {
      const product = getProductById(1);
      expect(product).toBeDefined();
      expect(product.id).toBe(1);
      expect(product.nombre).toBe('Manzanas Orgánicas');
    });

    test('should return undefined for non-existent product', () => {
      const product = getProductById(999);
      expect(product).toBeUndefined();
    });

    test('should get products by category', () => {
      const frutas = getProductsByCategory('frutas');
      expect(Array.isArray(frutas)).toBe(true);
      frutas.forEach(product => {
        expect(product.categoria).toBe('frutas');
      });
    });

    test('should get offer products', () => {
      const offerProducts = getOffertProducts();
      expect(Array.isArray(offerProducts)).toBe(true);
      offerProducts.forEach(product => {
        expect(product.enOferta).toBe(true);
      });
    });

    test('should get featured products', () => {
      const featuredProducts = getFeaturedProducts();
      expect(Array.isArray(featuredProducts)).toBe(true);
      featuredProducts.forEach(product => {
        expect(product.destacado).toBe(true);
      });
    });
  });

  describe('CREATE Operations', () => {
    test('should create a new product', () => {
      const newProduct = {
        nombre: 'Test Product',
        descripcion: 'Test Description',
        precio: 1000,
        stock: 10,
        categoria: 'test',
        imagen: '/test.jpg',
        enOferta: false,
        destacado: false,
        unidad: 'kg'
      };

      const createdProduct = createProduct(newProduct);
      expect(createdProduct).toBeDefined();
      expect(createdProduct.id).toBeDefined();
      expect(createdProduct.nombre).toBe('Test Product');
    });

    test('should assign unique id to new product', () => {
      const product1 = createProduct({
        nombre: 'Product 1',
        descripcion: 'Description 1',
        precio: 1000,
        stock: 10,
        categoria: 'test',
        imagen: '/test1.jpg',
        enOferta: false,
        destacado: false,
        unidad: 'kg'
      });

      const product2 = createProduct({
        nombre: 'Product 2',
        descripcion: 'Description 2',
        precio: 2000,
        stock: 20,
        categoria: 'test',
        imagen: '/test2.jpg',
        enOferta: false,
        destacado: false,
        unidad: 'kg'
      });

      expect(product1.id).not.toBe(product2.id);
    });
  });

  describe('UPDATE Operations', () => {
    test('should update existing product', () => {
      const productId = 1;
      const updateData = {
        nombre: 'Updated Product Name',
        precio: 3000
      };

      const updatedProduct = updateProduct(productId, updateData);
      expect(updatedProduct).toBeDefined();
      expect(updatedProduct.nombre).toBe('Updated Product Name');
      expect(updatedProduct.precio).toBe(3000);
    });

    test('should return null for non-existent product update', () => {
      const updateData = { nombre: 'Updated Name' };
      const result = updateProduct(999, updateData);
      expect(result).toBeNull();
    });

    test('should preserve other properties when updating', () => {
      const productId = 1;
      const originalProduct = getProductById(productId);
      const updateData = { precio: 5000 };

      const updatedProduct = updateProduct(productId, updateData);
      expect(updatedProduct.descripcion).toBe(originalProduct.descripcion);
      expect(updatedProduct.categoria).toBe(originalProduct.categoria);
    });
  });

  describe('DELETE Operations', () => {
    test('should delete existing product', () => {
      const productId = 1;
      const result = deleteProduct(productId);
      expect(result).toBe(true);

      const deletedProduct = getProductById(productId);
      expect(deletedProduct).toBeUndefined();
    });

    test('should remove product from products list', () => {
      const initialProducts = getProducts();
      const initialCount = initialProducts.length;
      
      deleteProduct(1);
      const remainingProducts = getProducts();
      
      expect(remainingProducts.length).toBe(initialCount - 1);
    });
  });

  describe('Data Integrity', () => {
    test('should maintain data consistency after operations', () => {
      // Create a product
      const newProduct = createProduct({
        nombre: 'Test Product',
        descripcion: 'Test Description',
        precio: 1000,
        stock: 10,
        categoria: 'test',
        imagen: '/test.jpg',
        enOferta: false,
        destacado: false,
        unidad: 'kg'
      });

      // Verify it exists
      const retrievedProduct = getProductById(newProduct.id);
      expect(retrievedProduct).toBeDefined();

      // Update it
      const updatedProduct = updateProduct(newProduct.id, { precio: 2000 });
      expect(updatedProduct.precio).toBe(2000);

      // Delete it
      const deleteResult = deleteProduct(newProduct.id);
      expect(deleteResult).toBe(true);

      // Verify it's gone
      const deletedProduct = getProductById(newProduct.id);
      expect(deletedProduct).toBeUndefined();
    });
  });
});
