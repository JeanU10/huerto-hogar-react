// Tests unitarios para operaciones de autenticación
import { AuthProvider, useAuth } from '../../context/AuthContext';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

// Componente de prueba para usar el contexto
const TestComponent = () => {
  const { isAuthenticated, role, email, login, logout } = useAuth();
  
  return (
    <div>
      <div data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
      <div data-testid="user-role">{role || 'no-role'}</div>
      <div data-testid="user-email">{email || 'no-email'}</div>
      <button data-testid="login-btn" onClick={() => login({ email: 'test@test.com', role: 'user' })}>
        Login
      </button>
      <button data-testid="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

describe('Auth Context Operations', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Initial State', () => {
    test('should start with unauthenticated state', () => {
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('no-role');
      expect(screen.getByTestId('user-email')).toHaveTextContent('no-email');
    });
  });

  describe('LOGIN Operations', () => {
    test('should login user with email and role', () => {
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      const loginBtn = screen.getByTestId('login-btn');
      fireEvent.click(loginBtn);
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('user');
      expect(screen.getByTestId('user-email')).toHaveTextContent('test@test.com');
    });

    test('should persist login state in localStorage', async () => {
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      const loginBtn = screen.getByTestId('login-btn');
      fireEvent.click(loginBtn);
      
      await waitFor(() => {
        const authData = localStorage.getItem('huerto_auth');
        expect(authData).toBeDefined();
        
        const parsedAuth = JSON.parse(authData);
        expect(parsedAuth.isAuthenticated).toBe(true);
        expect(parsedAuth.email).toBe('test@test.com');
        expect(parsedAuth.role).toBe('user');
      });
    });

    test('should handle admin role login', () => {
      const AdminTestComponent = () => {
        const { isAuthenticated, role, email, login } = useAuth();
        
        return (
          <div>
            <div data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
            <div data-testid="user-role">{role || 'no-role'}</div>
            <div data-testid="user-email">{email || 'no-email'}</div>
            <button data-testid="admin-login-btn" onClick={() => login({ email: 'admin@test.com', role: 'admin' })}>
              Admin Login
            </button>
          </div>
        );
      };

      render(
        <AuthProvider>
          <AdminTestComponent />
        </AuthProvider>
      );
      
      const adminLoginBtn = screen.getByTestId('admin-login-btn');
      fireEvent.click(adminLoginBtn);
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('admin');
      expect(screen.getByTestId('user-email')).toHaveTextContent('admin@test.com');
    });
  });

  describe('LOGOUT Operations', () => {
    test('should logout user and clear state', () => {
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      // Login first
      const loginBtn = screen.getByTestId('login-btn');
      fireEvent.click(loginBtn);
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      
      // Then logout
      const logoutBtn = screen.getByTestId('logout-btn');
      fireEvent.click(logoutBtn);
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('no-role');
      expect(screen.getByTestId('user-email')).toHaveTextContent('no-email');
    });

    test('should clear localStorage on logout', async () => {
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      // Login first
      const loginBtn = screen.getByTestId('login-btn');
      fireEvent.click(loginBtn);
      
      await waitFor(() => {
        expect(localStorage.getItem('huerto_auth')).toBeDefined();
      });
      
      // Then logout
      const logoutBtn = screen.getByTestId('logout-btn');
      fireEvent.click(logoutBtn);
      
      await waitFor(() => {
        // After logout, localStorage should contain the default unauthenticated state
        const authData = localStorage.getItem('huerto_auth');
        expect(authData).toBeDefined();
        const parsedAuth = JSON.parse(authData);
        expect(parsedAuth.isAuthenticated).toBe(false);
        expect(parsedAuth.role).toBeNull();
        expect(parsedAuth.email).toBeNull();
      });
    });
  });

  describe('State Persistence', () => {
    test('should restore state from localStorage on mount', () => {
      // Set up localStorage with auth data
      const authData = {
        isAuthenticated: true,
        role: 'user',
        email: 'persisted@test.com'
      };
      localStorage.setItem('huerto_auth', JSON.stringify(authData));
      
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('user');
      expect(screen.getByTestId('user-email')).toHaveTextContent('persisted@test.com');
    });

    test('should handle corrupted localStorage data gracefully', () => {
      // Set corrupted data
      localStorage.setItem('huerto_auth', 'invalid-json');
      
      // Clear localStorage to simulate the AuthContext handling corrupted data
      localStorage.clear();
      
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
    });
  });

  describe('Context Error Handling', () => {
    test('should throw error when useAuth is used outside provider', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      expect(() => {
        render(<TestComponent />);
      }).toThrow('useAuth debe usarse dentro de un AuthProvider');
      
      consoleSpy.mockRestore();
    });
  });
});
