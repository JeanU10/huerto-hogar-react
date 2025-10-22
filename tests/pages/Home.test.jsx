// Tests unitarios para la página Home
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../src/pages/Home/Home';
import { getFeaturedProducts, getCategories } from '../../src/data/mockData';

// Mock mockData
jest.mock('../../src/data/mockData', () => ({
  getFeaturedProducts: jest.fn(),
  getCategories: jest.fn()
}));

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

const renderHome = () => {
  getFeaturedProducts.mockReturnValue(mockFeaturedProducts);
  getCategories.mockReturnValue(mockCategories);
  
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('should render hero section with title and description', () => {
      renderHome();
      
      expect(screen.getByText('¡Descubre la frescura del campo con HuertoHogar!')).toBeInTheDocument();
      expect(screen.getByText('Directamente del campo a tu mesa, garantizando la máxima frescura y calidad en cada producto.')).toBeInTheDocument();
    });

    test('should render benefits section', () => {
      renderHome();
      
      expect(screen.getByText('¿Por qué elegirnos?')).toBeInTheDocument();
      expect(screen.getByText('Productos Frescos')).toBeInTheDocument();
      expect(screen.getByText('Cobertura Nacional')).toBeInTheDocument();
      expect(screen.getByText('100% Orgánico')).toBeInTheDocument();
      expect(screen.getByText('Apoyo Local')).toBeInTheDocument();
    });

    test('should render categories section', () => {
      renderHome();
      
      expect(screen.getByText('Explora nuestras categorías')).toBeInTheDocument();
      expect(screen.getByText('Frutas')).toBeInTheDocument();
      expect(screen.getByText('Verduras')).toBeInTheDocument();
    });

    test('should render featured products section', () => {
      renderHome();
      
      expect(screen.getByText('Productos Destacados')).toBeInTheDocument();
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
      expect(screen.getByText('Lechugas Hidropónicas')).toBeInTheDocument();
    });

    test('should render testimonials section', () => {
      renderHome();
      
      expect(screen.getByText('Lo que dicen nuestros clientes')).toBeInTheDocument();
      expect(screen.getByText('María González')).toBeInTheDocument();
      expect(screen.getByText('Carlos Pérez')).toBeInTheDocument();
      expect(screen.getByText('Ana Martínez')).toBeInTheDocument();
    });

    test('should render CTA section', () => {
      renderHome();
      
      expect(screen.getByText('¡Únete a nosotros y disfruta de productos frescos y saludables!')).toBeInTheDocument();
      expect(screen.getByText('Crear Cuenta')).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    test('should have correct href attributes for main navigation', () => {
      renderHome();
      
      const verProductosBtn = screen.getByText('Ver Productos');
      expect(verProductosBtn.closest('a')).toHaveAttribute('href', '/productos');
      
      const verTodosBtn = screen.getByText('Ver todos los productos');
      expect(verTodosBtn.closest('a')).toHaveAttribute('href', '/productos');
      
      const crearCuentaBtn = screen.getByText('Crear Cuenta');
      expect(crearCuentaBtn.closest('a')).toHaveAttribute('href', '/register');
    });

    test('should have correct href attributes for category links', () => {
      renderHome();
      
      const frutasLink = screen.getByText('Frutas');
      expect(frutasLink.closest('a')).toHaveAttribute('href', '/categoria/frutas');
      
      const verdurasLink = screen.getByText('Verduras');
      expect(verdurasLink.closest('a')).toHaveAttribute('href', '/categoria/verduras');
    });
  });

  describe('Data Loading', () => {
    test('should call getFeaturedProducts and getCategories on mount', () => {
      renderHome();
      
      expect(getFeaturedProducts).toHaveBeenCalled();
      expect(getCategories).toHaveBeenCalled();
    });

    test('should render featured products correctly', () => {
      renderHome();
      
      // Check that featured products are rendered
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
      expect(screen.getByText('Lechugas Hidropónicas')).toBeInTheDocument();
    });

    test('should render categories correctly', () => {
      renderHome();
      
      // Check that categories are rendered
      expect(screen.getByText('Frutas')).toBeInTheDocument();
      expect(screen.getByText('Verduras')).toBeInTheDocument();
    });
  });

  describe('Content Structure', () => {
    test('should have proper semantic structure', () => {
      renderHome();
      
      // Check for main sections
      const heroSection = screen.getByText('¡Descubre la frescura del campo con HuertoHogar!').closest('section');
      expect(heroSection).toBeInTheDocument();
      
      const benefitsSection = screen.getByText('¿Por qué elegirnos?').closest('section');
      expect(benefitsSection).toBeInTheDocument();
    });

    test('should display benefit icons and descriptions', () => {
      renderHome();
      
      expect(screen.getByText('📦')).toBeInTheDocument();
      expect(screen.getByText('🚚')).toBeInTheDocument();
      expect(screen.getByText('🌱')).toBeInTheDocument();
      expect(screen.getByText('🤝')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('should have proper Bootstrap classes for responsive design', () => {
      renderHome();
      
      // Check for Bootstrap container classes
      const containers = screen.getAllByText(/.*/).filter(el => 
        el.className && el.className.includes('container')
      );
      expect(containers.length).toBeGreaterThan(0);
    });
  });
});
