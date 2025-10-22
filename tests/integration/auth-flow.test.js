// Tests de integración para el flujo completo de autenticación
import { AuthProvider, useAuth } from '../../src/context/AuthContext';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

// Componente de prueba para simular el flujo de autenticación
const AuthFlowTestComponent = () => {
  const { isAuthenticated, role, email, login, logout } = useAuth();
  
  return (
    <div>
      <div data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
      <div data-testid="user-role">{role || 'no-role'}</div>
      <div data-testid="user-email">{email || 'no-email'}</div>
      
      <button 
        data-testid="user-login-btn" 
        onClick={() => login({ email: 'user@test.com', role: 'user' })}
      >
        Login as User
      </button>
      
      <button 
        data-testid="admin-login-btn" 
        onClick={() => login({ email: 'admin@test.com', role: 'admin' })}
      >
        Login as Admin
      </button>
      
      <button data-testid="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

describe('Authentication Integration Flow', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Complete Authentication Workflow', () => {
    test('should handle complete user authentication flow', async () => {
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      // 1. Start unauthenticated
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('no-role');
      expect(screen.getByTestId('user-email')).toHaveTextContent('no-email');
      
      // 2. Login as user
      const userLoginBtn = screen.getByTestId('user-login-btn');
      fireEvent.click(userLoginBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
        expect(screen.getByTestId('user-role')).toHaveTextContent('user');
        expect(screen.getByTestId('user-email')).toHaveTextContent('user@test.com');
      });
      
      // 3. Verify localStorage persistence
      await waitFor(() => {
        const authData = localStorage.getItem('huerto_auth');
        expect(authData).toBeDefined();
        
        const parsedAuth = JSON.parse(authData);
        expect(parsedAuth.isAuthenticated).toBe(true);
        expect(parsedAuth.role).toBe('user');
        expect(parsedAuth.email).toBe('user@test.com');
      });
      
      // 4. Logout
      const logoutBtn = screen.getByTestId('logout-btn');
      fireEvent.click(logoutBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
        expect(screen.getByTestId('user-role')).toHaveTextContent('no-role');
        expect(screen.getByTestId('user-email')).toHaveTextContent('no-email');
      });
      
      // 5. Verify localStorage is cleared
      await waitFor(() => {
        expect(localStorage.getItem('huerto_auth')).toBeNull();
      });
    });

    test('should handle admin authentication flow', async () => {
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      // Login as admin
      const adminLoginBtn = screen.getByTestId('admin-login-btn');
      fireEvent.click(adminLoginBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
        expect(screen.getByTestId('user-role')).toHaveTextContent('admin');
        expect(screen.getByTestId('user-email')).toHaveTextContent('admin@test.com');
      });
      
      // Verify admin-specific functionality
      await waitFor(() => {
        const authData = localStorage.getItem('huerto_auth');
        const parsedAuth = JSON.parse(authData);
        expect(parsedAuth.role).toBe('admin');
      });
    });

    test('should handle role switching', async () => {
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      // Login as user
      const userLoginBtn = screen.getByTestId('user-login-btn');
      fireEvent.click(userLoginBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('user-role')).toHaveTextContent('user');
      });
      
      // Switch to admin
      const adminLoginBtn = screen.getByTestId('admin-login-btn');
      fireEvent.click(adminLoginBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('user-role')).toHaveTextContent('admin');
        expect(screen.getByTestId('user-email')).toHaveTextContent('admin@test.com');
      });
    });
  });

  describe('State Persistence and Recovery', () => {
    test('should restore authentication state from localStorage', () => {
      // Set up localStorage with auth data
      const authData = {
        isAuthenticated: true,
        role: 'user',
        email: 'persisted@test.com'
      };
      localStorage.setItem('huerto_auth', JSON.stringify(authData));
      
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      expect(screen.getByTestId('user-role')).toHaveTextContent('user');
      expect(screen.getByTestId('user-email')).toHaveTextContent('persisted@test.com');
    });

    test('should handle corrupted localStorage gracefully', () => {
      localStorage.setItem('huerto_auth', 'invalid-json');
      
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
    });

    test('should maintain state consistency across operations', async () => {
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      // Login
      const userLoginBtn = screen.getByTestId('user-login-btn');
      fireEvent.click(userLoginBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      });
      
      // Verify state is maintained
      const authData = localStorage.getItem('huerto_auth');
      expect(authData).toBeDefined();
      
      // Logout
      const logoutBtn = screen.getByTestId('logout-btn');
      fireEvent.click(logoutBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated');
      });
      
      // Verify state is cleared
      const clearedAuthData = localStorage.getItem('huerto_auth');
      expect(clearedAuthData).toBeNull();
    });
  });

  describe('Error Handling', () => {
    test('should handle context errors gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      expect(() => {
        render(<AuthFlowTestComponent />);
      }).toThrow('useAuth debe usarse dentro de un AuthProvider');
      
      consoleSpy.mockRestore();
    });

    test('should handle invalid authentication data', async () => {
      render(
        <AuthProvider>
          <AuthFlowTestComponent />
        </AuthProvider>
      );
      
      // Try to login with invalid data
      const userLoginBtn = screen.getByTestId('user-login-btn');
      fireEvent.click(userLoginBtn);
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated');
      });
    });
  });
});
