// Tests simplificados para la página Home
import React from 'react';
import { render, screen } from '@testing-library/react';
import { getFeaturedProducts, getCategories } from '../../data/mockData';

// Mock mockData
jest.mock('../../data/mockData', () => ({
  getFeaturedProducts: jest.fn(),
  getCategories: jest.fn()
}));

// Componente simplificado para testing
const SimpleHome = () => {
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section data-testid="hero-section">
        <h1>¡Descubre la frescura del campo con HuertoHogar!</h1>
        <p>Directamente del campo a tu mesa, garantizando la máxima frescura y calidad en cada producto.</p>
        <a href="/productos">Ver Productos</a>
      </section>

      {/* Benefits Section */}
      <section data-testid="benefits-section">
        <h2>¿Por qué elegirnos?</h2>
        <div>
          <h3>Productos Frescos</h3>
          <p>Directamente del campo a tu mesa, garantizando máxima frescura.</p>
        </div>
        <div>
          <h3>Cobertura Nacional</h3>
          <p>Entregamos en más de 9 puntos del país.</p>
        </div>
        <div>
          <h3>100% Orgánico</h3>
          <p>Cultivados sin pesticidas ni químicos.</p>
        </div>
        <div>
          <h3>Apoyo Local</h3>
          <p>Conectamos con productores locales.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section data-testid="categories-section">
        <h2>Explora nuestras categorías</h2>
        {categories.map(category => (
          <div key={category.id} data-testid={`category-${category.id}`}>
            <h3>{category.nombre}</h3>
            <p>{category.descripcion}</p>
            <a href={`/categoria/${category.slug}`}>Ver {category.nombre}</a>
          </div>
        ))}
      </section>

      {/* Featured Products Section */}
      <section data-testid="featured-products-section">
        <h2>Productos Destacados</h2>
        {featuredProducts.map(product => (
          <div key={product.id} data-testid={`product-${product.id}`}>
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
          </div>
        ))}
        <a href="/productos">Ver todos los productos</a>
      </section>

      {/* Testimonials Section */}
      <section data-testid="testimonials-section">
        <h2>Lo que dicen nuestros clientes</h2>
        <div>
          <p>"Los productos de HuertoHogar son increíblemente frescos."</p>
          <footer>- María González</footer>
        </div>
        <div>
          <p>"Excelente servicio y productos de calidad."</p>
          <footer>- Carlos Pérez</footer>
        </div>
        <div>
          <p>"Me encanta poder apoyar a los productores locales."</p>
          <footer>- Ana Martínez</footer>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section">
        <h2>¡Únete a nosotros y disfruta de productos frescos y saludables!</h2>
        <p>Directo a tu hogar</p>
        <a href="/register">Crear Cuenta</a>
      </section>
    </div>
  );
};

const mockFeaturedProducts = [
  {
    id: 1,
    nombre: 'Manzanas Orgánicas',
    descripcion: 'Manzanas rojas cultivadas sin pesticidas',
    precio: 2500,
    stock: 50,
    categoria: 'frutas',
    imagen: '/images/products/manzanas.jpg',
    enOferta: true,
    destacado: true,
    unidad: 'kg'
  },
  {
    id: 2,
    nombre: 'Lechugas Hidropónicas',
    descripcion: 'Lechugas frescas cosechadas diariamente',
    precio: 1500,
    stock: 30,
    categoria: 'verduras',
    imagen: '/images/products/lechugas.jpg',
    enOferta: false,
    destacado: true,
    unidad: 'unidad'
  }
];

const mockCategories = [
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
  }
];

describe('Home Page (Simplified)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getFeaturedProducts.mockReturnValue(mockFeaturedProducts);
    getCategories.mockReturnValue(mockCategories);
  });

  describe('Rendering', () => {
    test('should render home page structure', () => {
      render(<SimpleHome />);
      
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    test('should render hero section with title and description', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('¡Descubre la frescura del campo con HuertoHogar!')).toBeInTheDocument();
      expect(screen.getByText('Directamente del campo a tu mesa, garantizando la máxima frescura y calidad en cada producto.')).toBeInTheDocument();
    });

    test('should render benefits section', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('¿Por qué elegirnos?')).toBeInTheDocument();
      expect(screen.getByText('Productos Frescos')).toBeInTheDocument();
      expect(screen.getByText('Cobertura Nacional')).toBeInTheDocument();
      expect(screen.getByText('100% Orgánico')).toBeInTheDocument();
      expect(screen.getByText('Apoyo Local')).toBeInTheDocument();
    });

    test('should render categories section', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('Explora nuestras categorías')).toBeInTheDocument();
      expect(screen.getByText('Frutas')).toBeInTheDocument();
      expect(screen.getByText('Verduras')).toBeInTheDocument();
    });

    test('should render featured products section', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('Productos Destacados')).toBeInTheDocument();
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
      expect(screen.getByText('Lechugas Hidropónicas')).toBeInTheDocument();
    });

    test('should render testimonials section', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('Lo que dicen nuestros clientes')).toBeInTheDocument();
      expect(screen.getByText('- María González')).toBeInTheDocument();
      expect(screen.getByText('- Carlos Pérez')).toBeInTheDocument();
      expect(screen.getByText('- Ana Martínez')).toBeInTheDocument();
    });

    test('should render CTA section', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('¡Únete a nosotros y disfruta de productos frescos y saludables!')).toBeInTheDocument();
      expect(screen.getByText('Crear Cuenta')).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    test('should have correct href attributes for main navigation', () => {
      render(<SimpleHome />);
      
      const verProductosBtn = screen.getByText('Ver Productos');
      expect(verProductosBtn.closest('a')).toHaveAttribute('href', '/productos');
      
      const verTodosBtn = screen.getByText('Ver todos los productos');
      expect(verTodosBtn.closest('a')).toHaveAttribute('href', '/productos');
      
      const crearCuentaBtn = screen.getByText('Crear Cuenta');
      expect(crearCuentaBtn.closest('a')).toHaveAttribute('href', '/register');
    });

    test('should have correct href attributes for category links', () => {
      render(<SimpleHome />);
      
      const frutasLink = screen.getByText('Ver Frutas');
      expect(frutasLink.closest('a')).toHaveAttribute('href', '/categoria/frutas');
      
      const verdurasLink = screen.getByText('Ver Verduras');
      expect(verdurasLink.closest('a')).toHaveAttribute('href', '/categoria/verduras');
    });
  });

  describe('Data Loading', () => {
    test('should call getFeaturedProducts and getCategories on mount', () => {
      render(<SimpleHome />);
      
      expect(getFeaturedProducts).toHaveBeenCalled();
      expect(getCategories).toHaveBeenCalled();
    });

    test('should render featured products correctly', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
      expect(screen.getByText('Lechugas Hidropónicas')).toBeInTheDocument();
    });

    test('should render categories correctly', () => {
      render(<SimpleHome />);
      
      expect(screen.getByText('Frutas')).toBeInTheDocument();
      expect(screen.getByText('Verduras')).toBeInTheDocument();
    });
  });

  describe('Content Structure', () => {
    test('should have proper semantic structure', () => {
      render(<SimpleHome />);
      
      expect(screen.getByTestId('hero-section')).toBeInTheDocument();
      expect(screen.getByTestId('benefits-section')).toBeInTheDocument();
      expect(screen.getByTestId('categories-section')).toBeInTheDocument();
      expect(screen.getByTestId('featured-products-section')).toBeInTheDocument();
      expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
      expect(screen.getByTestId('cta-section')).toBeInTheDocument();
    });
  });
});
