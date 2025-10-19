// src/data/mockData.js

const STORAGE_KEYS = {
  PRODUCTS: 'huerto_products',
  CATEGORIES: 'huerto_categories',
  CART: 'huerto_cart',
  ORDERS: 'huerto_orders',
  USERS: 'huerto_users',
  BLOGS: 'huerto_blogs'
};

const initializeData = () => {
  // Forzar actualización de datos para corregir rutas de imágenes
  if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS) || localStorage.getItem('huerto_data_updated') !== 'v3') {
    const defaultProducts = [
      {
        //Parámetros de los productos
        id: 1,
        nombre: 'Manzanas Orgánicas',
        descripcion: 'Manzanas rojas cultivadas sin pesticidas, frescas y crujientes. Perfectas para toda la familia.',
        precio: 2500,
        stock: 50,
        categoria: 'frutas',
        imagen: '/images/products/manzanas.jpg',
        enOferta: true,
        precioOferta: 2000,
        destacado: true,
        unidad: 'kg'
      },
      {
        id: 2,
        nombre: 'Lechugas Hidropónicas',
        descripcion: 'Lechugas frescas cosechadas diariamente, cultivadas con tecnología hidropónica de última generación.',
        precio: 1500,
        stock: 30,
        categoria: 'verduras',
        imagen: '/images/products/lechugas.jpg',
        enOferta: false,
        destacado: true,
        unidad: 'unidad'
      },
      {
        id: 3,
        nombre: 'Tomates Cherry Orgánicos',
        descripcion: 'Tomates cherry dulces y jugosos, cultivados en invernaderos con técnicas orgánicas certificadas.',
        precio: 3000,
        stock: 25,
        categoria: 'verduras',
        imagen: '/images/products/tomates.jpg',
        enOferta: true,
        precioOferta: 2500,
        destacado: false,
        unidad: 'kg'
      },
      {
        id: 4,
        nombre: 'Leche Fresca de Campo',
        descripcion: 'Leche fresca pasteurizada de granjas locales, rica en calcio y proteínas naturales.',
        precio: 1200,
        stock: 40,
        categoria: 'lacteos',
        imagen: '/images/products/leche.jpg',
        enOferta: false,
        destacado: true,
        unidad: 'litro'
      },
      {
        id: 5,
        nombre: 'Miel Natural Pura',
        descripcion: 'Miel 100% natural de abejas locales, sin aditivos ni preservantes. Ideal para endulzar naturalmente.',
        precio: 5000,
        stock: 20,
        categoria: 'procesados',
        imagen: '/images/products/miel.jpg',
        enOferta: false,
        destacado: false,
        unidad: '500g'
      },
      {
        id: 6,
        nombre: 'Zanahorias Orgánicas',
        descripcion: 'Zanahorias frescas cultivadas sin químicos, ricas en vitamina A y beta-caroteno.',
        precio: 1800,
        stock: 35,
        categoria: 'verduras',
        imagen: '/images/products/zanahorias.jpg',
        enOferta: true,
        precioOferta: 1500,
        destacado: false,
        unidad: 'kg'
      },
      {
        id: 7,
        nombre: 'Espinacas Frescas',
        descripcion: 'Espinacas tiernas y frescas, perfectas para ensaladas y platos saludables.',
        precio: 2200,
        stock: 28,
        categoria: 'verduras',
        imagen: '/images/products/espinacas.jpg',
        enOferta: false,
        destacado: true,
        unidad: 'kg'
      },
      {
        id: 8,
        nombre: 'Fresas Orgánicas',
        descripcion: 'Fresas dulces y aromáticas, cultivadas sin pesticidas en nuestros campos.',
        precio: 4500,
        stock: 15,
        categoria: 'frutas',
        imagen: '/images/products/fresas.jpg',
        enOferta: true,
        precioOferta: 3800,
        destacado: true,
        unidad: 'kg'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(defaultProducts));
    localStorage.setItem('huerto_data_updated', 'v2');
  }

  if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES) || localStorage.getItem('huerto_data_updated') !== 'v2') {
    const defaultCategories = [
      { 
        id: 1, 
        nombre: 'Frutas', 
        slug: 'frutas', 
        descripcion: 'Frutas frescas de temporada', 
        imagen: '/images/categories/frutas.jpg',
        icono: '🍎'
      },
      { 
        id: 2, 
        nombre: 'Verduras', 
        slug: 'verduras', 
        descripcion: 'Verduras frescas y orgánicas', 
        imagen: '/images/categories/verduras.jpg',
        icono: '🥬'
      },
      { 
        id: 3, 
        nombre: 'Lácteos', 
        slug: 'lacteos', 
        descripcion: 'Productos lácteos frescos', 
        imagen: '/images/categories/lacteos.jpg',
        icono: '🥛'
      },
      { 
        id: 4, 
        nombre: 'Procesados', 
        slug: 'procesados', 
        descripcion: 'Productos naturales procesados', 
        imagen: '/images/categories/procesados.jpg',
        icono: '🍯'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(defaultCategories));
    localStorage.setItem('huerto_data_updated', 'v2');
  }

  if (!localStorage.getItem(STORAGE_KEYS.BLOGS) || localStorage.getItem('huerto_data_updated') !== 'v2') {
    const defaultBlogs = [
      {
        id: 1,
        titulo: 'Beneficios de los Productos Orgánicos para tu Salud',
        contenido: 'Los productos orgánicos ofrecen múltiples beneficios para la salud. Al ser cultivados sin pesticidas ni químicos sintéticos, mantienen sus nutrientes naturales intactos. Además, estudios demuestran que contienen mayores niveles de antioxidantes y vitaminas esenciales. Consumir productos orgánicos también contribuye a reducir la exposición a sustancias tóxicas que pueden afectar nuestro organismo a largo plazo.',
        resumen: 'Descubre cómo los productos orgánicos pueden mejorar tu salud y bienestar.',
        fecha: '2024-10-15',
        autor: 'Equipo HuertoHogar',
        imagen: '/images/blog/blog1.jpg',
        categoria: 'Salud'
      },
      {
        id: 2,
        titulo: 'Cómo Iniciar tu Propio Huerto Casero: Guía Completa',
        contenido: 'Iniciar un huerto casero es más fácil de lo que piensas. Lo primero es elegir un espacio con buena iluminación solar, al menos 6 horas diarias. Comienza con plantas fáciles como lechugas, tomates cherry o hierbas aromáticas. Necesitarás tierra de calidad, macetas o camas de cultivo, y un sistema de riego constante. La clave del éxito está en la paciencia y el cuidado diario de tus plantas.',
        resumen: 'Paso a paso para crear tu huerto en casa y disfrutar de productos frescos.',
        fecha: '2024-10-10',
        autor: 'Equipo HuertoHogar',
        imagen: '/images/blog/blog2.jpg',
        categoria: 'Jardinería'
      },
      {
        id: 3,
        titulo: 'Recetas Saludables con Ingredientes Orgánicos',
        contenido: 'La cocina orgánica es deliciosa y nutritiva. Te compartimos algunas recetas simples: ensalada de espinacas con fresas y nueces, smoothie verde con manzanas y espinacas, pasta con tomates cherry asados. Todos estos platos aprovechan al máximo el sabor natural de los ingredientes orgánicos sin necesidad de aderezos artificiales.',
        resumen: 'Ideas de recetas deliciosas y saludables con productos orgánicos.',
        fecha: '2024-10-05',
        autor: 'Equipo HuertoHogar',
        imagen: '/images/blog/blog1.jpg',
        categoria: 'Recetas'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(defaultBlogs));
    localStorage.setItem('huerto_data_updated', 'v2');
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
      imagen: product.imagen,
      unidad: product.unidad
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
    codigo: `HH${Date.now()}`,
    estado: 'confirmado'
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
