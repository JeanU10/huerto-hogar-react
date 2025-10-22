// Tests unitarios para el componente Navbar
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavbarComponent from '../../src/components/Navbar/Navbar';
import { useAuth } from '../../src/context/AuthContext';
import { getCart, getCartTotal } from '../../src/data/mockData';

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    info: jest.fn()
  }
}));

// Mock AuthContext
jest.mock('../../src/context/AuthContext', () => ({
  useAuth: jest.fn()
}));

// Mock mockData
jest.mock('../../src/data/mockData', () => ({
  getCart: jest.fn(),
  getCartTotal: jest.fn()
}));

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

// Mock window.addEventListener and removeEventListener
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();
Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener
});
Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener
});

const renderNavbar = (authProps = {}) => {
  const defaultAuthProps = {
    isAuthenticated: false,
    role: null,
    email: null,
    logout: jest.fn(),
    ...authProps
  };
  
  useAuth.mockReturnValue(defaultAuthProps);
  getCart.mockReturnValue([]);
  getCartTotal.mockReturnValue(0);
  
  return render(
    <BrowserRouter>
      <NavbarComponent />
    </BrowserRouter>
  );
};

describe('NavbarComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockNavigate.mockClear();
  });

  describe('Rendering', () => {
    test('should render brand logo and name', () => {
      renderNavbar();
      
      expect(screen.getByText('🌱 HuertoHogar')).toBeInTheDocument();
    });

    test('should render all navigation links', () => {
      renderNavbar();
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Productos')).toBeInTheDocument();
      expect(screen.getByText('Categorías')).toBeInTheDocument();
      expect(screen.getByText('Ofertas')).toBeInTheDocument();
      expect(screen.getByText('Nosotros')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    test('should display cart total correctly', () => {
      getCartTotal.mockReturnValue(15000);
      renderNavbar();
      
      expect(screen.getByText('$15,000')).toBeInTheDocument();
    });

    test('should display cart item count when items are in cart', () => {
      getCart.mockReturnValue([
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 }
      ]);
      getCartTotal.mockReturnValue(15000);
      renderNavbar();
      
      expect(screen.getByText('3')).toBeInTheDocument(); // Total items: 2 + 1 = 3
    });
  });

  describe('Authentication States', () => {
    test('should show login and register links when not authenticated', () => {
      renderNavbar();
      
      expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
      expect(screen.getByText('Crear Cuenta')).toBeInTheDocument();
    });

    test('should show user email and logout button when authenticated', () => {
      renderNavbar({
        isAuthenticated: true,
        email: 'test@example.com',
        logout: jest.fn()
      });
      
      expect(screen.getByText('👤 test@example.com')).toBeInTheDocument();
      expect(screen.getByText('Salir')).toBeInTheDocument();
    });

    test('should show admin link when user has admin role', () => {
      renderNavbar({
        isAuthenticated: true,
        role: 'admin',
        email: 'admin@example.com',
        logout: jest.fn()
      });
      
      expect(screen.getByText('👨‍💼 Admin')).toBeInTheDocument();
    });

    test('should not show admin link when user is not admin', () => {
      renderNavbar({
        isAuthenticated: true,
        role: 'user',
        email: 'user@example.com',
        logout: jest.fn()
      });
      
      expect(screen.queryByText('👨‍💼 Admin')).not.toBeInTheDocument();
    });
  });

  describe('Logout Functionality', () => {
    test('should call logout function when logout button is clicked', () => {
      const mockLogout = jest.fn();
      renderNavbar({
        isAuthenticated: true,
        email: 'test@example.com',
        logout: mockLogout
      });
      
      const logoutButton = screen.getByText('Salir');
      fireEvent.click(logoutButton);
      
      expect(mockLogout).toHaveBeenCalled();
    });

    test('should show info toast and navigate to home when logout is successful', async () => {
      const mockLogout = jest.fn();
      renderNavbar({
        isAuthenticated: true,
        email: 'test@example.com',
        logout: mockLogout
      });
      
      const logoutButton = screen.getByText('Salir');
      fireEvent.click(logoutButton);
      
      await waitFor(() => {
        expect(toast.info).toHaveBeenCalledWith('Sesión cerrada', { icon: '👋' });
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });
  });

  describe('Cart Event Handling', () => {
    test('should add cartUpdated event listener on mount', () => {
      renderNavbar();
      
      expect(mockAddEventListener).toHaveBeenCalledWith('cartUpdated', expect.any(Function));
    });

    test('should remove cartUpdated event listener on unmount', () => {
      const { unmount } = renderNavbar();
      
      unmount();
      
      expect(mockRemoveEventListener).toHaveBeenCalledWith('cartUpdated', expect.any(Function));
    });
  });

  describe('Navigation Links', () => {
    test('should have correct href attributes for all navigation links', () => {
      renderNavbar();
      
      expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
      expect(screen.getByText('Productos').closest('a')).toHaveAttribute('href', '/productos');
      expect(screen.getByText('Categorías').closest('a')).toHaveAttribute('href', '/categorias');
      expect(screen.getByText('Ofertas').closest('a')).toHaveAttribute('href', '/ofertas');
      expect(screen.getByText('Nosotros').closest('a')).toHaveAttribute('href', '/nosotros');
      expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog');
      expect(screen.getByText('Contacto').closest('a')).toHaveAttribute('href', '/contacto');
      expect(screen.getByText('Iniciar Sesión').closest('a')).toHaveAttribute('href', '/login');
      expect(screen.getByText('Crear Cuenta').closest('a')).toHaveAttribute('href', '/register');
    });
  });
});
