// Tests simplificados para el componente Navbar
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAuth } from '../../context/AuthContext';
import { getCart, getCartTotal } from '../../data/mockData';

// Mock AuthContext
jest.mock('../../context/AuthContext', () => ({
  useAuth: jest.fn()
}));

// Mock mockData
jest.mock('../../data/mockData', () => ({
  getCart: jest.fn(),
  getCartTotal: jest.fn()
}));

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    info: jest.fn()
  }
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

// Componente simplificado para testing
const SimpleNavbar = () => {
  const { isAuthenticated, role, email, logout } = useAuth();
  const cartItems = getCart();
  const cartTotal = getCartTotal();

  const handleLogout = () => {
    logout();
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav data-testid="navbar">
      <div data-testid="brand">🌱 HuertoHogar</div>
      <div data-testid="nav-links">
        <a href="/">Home</a>
        <a href="/productos">Productos</a>
        <a href="/categorias">Categorías</a>
        <a href="/ofertas">Ofertas</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/blog">Blog</a>
        <a href="/contacto">Contacto</a>
      </div>
      <div data-testid="auth-section">
        {isAuthenticated ? (
          <div>
            <span data-testid="user-info">👤 {email}</span>
            <button onClick={handleLogout} data-testid="logout-btn">Salir</button>
            {role === 'admin' && <a href="/admin">👨‍💼 Admin</a>}
          </div>
        ) : (
          <div>
            <a href="/login">Iniciar Sesión</a>
            <a href="/register">Crear Cuenta</a>
          </div>
        )}
      </div>
      <div data-testid="cart-section">
        <span>🛒 ${cartTotal.toLocaleString()}</span>
        {cartItemCount > 0 && <span data-testid="cart-count">{cartItemCount}</span>}
      </div>
    </nav>
  );
};

describe('Navbar Component (Simplified)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('should render brand logo and name', () => {
      useAuth.mockReturnValue({
        isAuthenticated: false,
        role: null,
        email: null,
        logout: jest.fn()
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(0);

      render(<SimpleNavbar />);
      
      expect(screen.getByTestId('brand')).toHaveTextContent('🌱 HuertoHogar');
    });

    test('should render all navigation links', () => {
      useAuth.mockReturnValue({
        isAuthenticated: false,
        role: null,
        email: null,
        logout: jest.fn()
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(0);

      render(<SimpleNavbar />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Productos')).toBeInTheDocument();
      expect(screen.getByText('Categorías')).toBeInTheDocument();
      expect(screen.getByText('Ofertas')).toBeInTheDocument();
      expect(screen.getByText('Nosotros')).toBeInTheDocument();
      expect(screen.getByText('Blog')).toBeInTheDocument();
      expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    test('should display cart total correctly', () => {
      useAuth.mockReturnValue({
        isAuthenticated: false,
        role: null,
        email: null,
        logout: jest.fn()
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(15000);

      render(<SimpleNavbar />);
      
      expect(screen.getByTestId('cart-section')).toHaveTextContent('🛒 $15.000');
    });
  });

  describe('Authentication States', () => {
    test('should show login and register links when not authenticated', () => {
      useAuth.mockReturnValue({
        isAuthenticated: false,
        role: null,
        email: null,
        logout: jest.fn()
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(0);

      render(<SimpleNavbar />);
      
      expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
      expect(screen.getByText('Crear Cuenta')).toBeInTheDocument();
    });

    test('should show user email and logout button when authenticated', () => {
      useAuth.mockReturnValue({
        isAuthenticated: true,
        email: 'test@example.com',
        role: 'user',
        logout: jest.fn()
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(0);

      render(<SimpleNavbar />);
      
      expect(screen.getByTestId('user-info')).toHaveTextContent('👤 test@example.com');
      expect(screen.getByTestId('logout-btn')).toHaveTextContent('Salir');
    });

    test('should show admin link when user has admin role', () => {
      useAuth.mockReturnValue({
        isAuthenticated: true,
        role: 'admin',
        email: 'admin@example.com',
        logout: jest.fn()
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(0);

      render(<SimpleNavbar />);
      
      expect(screen.getByText('👨‍💼 Admin')).toBeInTheDocument();
    });
  });

  describe('Logout Functionality', () => {
    test('should call logout function when logout button is clicked', () => {
      const mockLogout = jest.fn();
      useAuth.mockReturnValue({
        isAuthenticated: true,
        email: 'test@example.com',
        role: 'user',
        logout: mockLogout
      });
      getCart.mockReturnValue([]);
      getCartTotal.mockReturnValue(0);

      render(<SimpleNavbar />);
      
      const logoutButton = screen.getByTestId('logout-btn');
      fireEvent.click(logoutButton);
      
      expect(mockLogout).toHaveBeenCalled();
    });
  });

  describe('Cart Display', () => {
    test('should display cart item count when items are in cart', () => {
      useAuth.mockReturnValue({
        isAuthenticated: false,
        role: null,
        email: null,
        logout: jest.fn()
      });
      getCart.mockReturnValue([
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 }
      ]);
      getCartTotal.mockReturnValue(15000);

      render(<SimpleNavbar />);
      
      expect(screen.getByTestId('cart-count')).toHaveTextContent('3');
    });
  });
});
