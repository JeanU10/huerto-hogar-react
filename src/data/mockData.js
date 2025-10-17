// src/data/mockData.js

// Base de datos simulada con LocalStorage
const STORAGE_KEYS = {
    PRODUCTS: 'huerto_products',
    CATEGORIES: 'huerto_categories',
    CART: 'huerto_cart',
    ORDERS: 'huerto_orders',
    USERS: 'huerto_users',
    BLOGS: 'huerto_blogs'
  };
  
  // Inicializar datos por defecto
  const initializeData = () => {
    if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
      const defaultProducts = [
        {
          id: 1,
          nombre: 'Manzanas Orgánicas',
          descripcion: 'Manzanas rojas cultivadas sin pesticidas',
          precio: 2500,
          stock: 50,
          categoria: 'frutas',
          imagen: 'https://via.placeholder.com/400x300?text=Manzanas',
          enOferta: true,
          precioOferta: 2000,
          destacado: true
        },
        {
          id: 2,
          nombre: 'Lechugas Frescas',
          descripcion: 'Lechugas hidropónicas cosechadas diariamente',
          precio: 1500,
          stock: 30,
          categoria: 'verduras',
          imagen: 'https://via.placeholder.com/400x300?text=Lechugas',
          enOferta: false,
          destacado: true
        },
        {
          id: 3,
          nombre: 'Tomates Cherry',
          descripcion: 'Tomates cherry orgánicos de invernadero',
          precio: 3000,
          stock: 25,
          categoria: 'verduras',
          imagen: 'https://via.placeholder.com/400x300?text=Tomates',
          enOferta: true,
          precioOferta: 2500,
          destacado: false
        },
        {
          id: 4,
          nombre: 'Leche de Campo',
          descripcion: 'Leche fresca de granjas locales',
          precio: 1200,
          stock: 40,
          categoria: 'lacteos',
          imagen: 'https://via.placeholder.com/400x300?text=Leche',
          enOferta: false,
          destacado: true
        },
        {
          id: 5,
          nombre: 'Miel Natural',
          descripcion: 'Miel pura de abejas locales',
          precio: 5000,
          stock: 20,
          categoria: 'procesados',
          imagen: 'https://via.placeholder.com/400x300?text=Miel',
          enOferta: false,
          destacado: false
        },
        {
          id: 6,
          nombre: 'Zanahorias Orgánicas',
          descripcion: 'Zanahorias frescas sin químicos',
          precio: 1800,
          stock: 35,
          categoria: 'verduras',
          imagen: 'https://via.placeholder.com/400x300?text=Zanahorias',
          enOferta: true,
          precioOferta: 1500,
          destacado: false
        }
      ];
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
    }
  
    if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
      const defaultCategories = [
        { id: 1, nombre: 'Frutas', slug: 'frutas', descripcion: 'Frutas de temporada', imagen: 'https://via.placeholder.com/100x100?text=Frutas' },
        { id: 2, nombre: 'Verduras', slug: 'verduras', descripcion: 'Verduras frescas', imagen: 'https://via.placeholder.com/100x100?text=Verduras' },
        { id: 3, nombre: 'Lácteos', slug: 'lacteos', descripcion: 'Productos lácteos', imagen: 'https://via.placeholder.com/100x100?text=Lacteos' },
        { id: 4, nombre: 'Procesados', slug: 'procesados', descripcion: 'Productos procesados', imagen: 'https://via.placeholder.com/100x100?text=Procesados' }
      ];
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(defaultCategories));
    }
  
    if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
      const defaultBlogs = [
        {
          id: 1,
          titulo: 'Beneficios de los Productos Orgánicos',
          contenido: 'Los productos orgánicos ofrecen múltiples beneficios para la salud...',
          fecha: '2024-10-15',
          autor: 'HuertoHogar',
          imagen: 'https://via.placeholder.com/600x400?text=Blog+1'
        },
        {
          id: 2,
          titulo: 'Cómo Cultivar tu Propio Huerto',
          contenido: 'Iniciar un huerto casero es más fácil de lo que piensas...',
          fecha: '2024-10-10',
          autor: 'HuertoHogar',
          imagen: 'https://via.placeholder.com/600x400?text=Blog+2'
        }
      ];
      localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(defaultBlogs));
    }
  
    if (!localStorage.getItem(STORAGE_KEYS.CART)) {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    }
  };
  
  // ============ PRODUCTOS - CRUD ============
  
  export const getProducts = () => {
    initializeData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || [];
  };
  
  export const getProductById = (id) => {
    const products = getProducts();
    return products.find(p => p.id === parseInt(id));
  };
  
  export const getProductsByCategory = (category) => {
    const products = getProducts();
    return products.filter(p => p.categoria === category);
  };
  
  export const getOffertProducts = () => {
    const products = getProducts();
    return products.filter(p => p.enOferta === true);
  };
  
  export const getFeaturedProducts = () => {
    const products = getProducts();
    return products.filter(p => p.destacado === true);
  };
  
  export const createProduct = (product) => {
    const products = getProducts();
    const newProduct = {
      ...product,
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1
    };
    products.push(newProduct);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    return newProduct;
  };
  
  export const updateProduct = (id, updatedData) => {
    const products = getProducts();
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedData };
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
      return products[index];
    }
    return null;
  };
  
  export const deleteProduct = (id) => {
    const products = getProducts();
    const filteredProducts = products.filter(p => p.id !== parseInt(id));
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(filteredProducts));
    return true;
  };
  
  // ============ CATEGORÍAS - CRUD ============
  
  export const getCategories = () => {
    initializeData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES)) || [];
  };
  
  export const getCategoryBySlug = (slug) => {
    const categories = getCategories();
    return categories.find(c => c.slug === slug);
  };
  
  export const createCategory = (category) => {
    const categories = getCategories();
    const newCategory = {
      ...category,
      id: categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1
    };
    categories.push(newCategory);
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
    return newCategory;
  };
  
  export const updateCategory = (id, updatedData) => {
    const categories = getCategories();
    const index = categories.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updatedData };
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
      return categories[index];
    }
    return null;
  };
  
  export const deleteCategory = (id) => {
    const categories = getCategories();
    const filtered = categories.filter(c => c.id !== parseInt(id));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(filtered));
    return true;
  };
  
  // ============ CARRITO - CRUD ============
  
  export const getCart = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  };
  
  export const addToCart = (productId, quantity = 1) => {
    const cart = getCart();
    const product = getProductById(productId);
    
    if (!product) return null;
    
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        nombre: product.nombre,
        precio: product.enOferta ? product.precioOferta : product.precio,
        quantity,
        imagen: product.imagen
      });
    }
    
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    return cart;
  };
  
  export const updateCartItem = (productId, quantity) => {
    const cart = getCart();
    const item = cart.find(item => item.productId === productId);
    
    if (item) {
      item.quantity = quantity;
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
      return cart;
    }
    return null;
  };
  
  export const removeFromCart = (productId) => {
    const cart = getCart();
    const filtered = cart.filter(item => item.productId !== productId);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(filtered));
    return filtered;
  };
  
  export const clearCart = () => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    return [];
  };
  
  export const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };
  
  // ============ ÓRDENES - CRUD ============
  
  export const getOrders = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
  };
  
  export const createOrder = (orderData) => {
    const orders = getOrders();
    const newOrder = {
      ...orderData,
      id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1,
      fecha: new Date().toISOString(),
      codigo: `ORDER${Date.now()}`
    };
    orders.push(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    return newOrder;
  };
  
  // ============ BLOGS - CRUD ============
  
  export const getBlogs = () => {
    initializeData();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOGS)) || [];
  };
  
  export const getBlogById = (id) => {
    const blogs = getBlogs();
    return blogs.find(b => b.id === parseInt(id));
  };
  
  export default {
    getProducts,
    getProductById,
    getProductsByCategory,
    getOffertProducts,
    getFeaturedProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getCategories,
    getCategoryBySlug,
    createCategory,
    updateCategory,
    deleteCategory,
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getCartTotal,
    getOrders,
    createOrder,
    getBlogs,
    getBlogById
  };
  