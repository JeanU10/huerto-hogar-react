import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    // Limpiar cualquier mock o estado entre pruebas
    window.localStorage.clear();
  });

  describe('Navegación', () => {
    it('renderiza la marca HuertoHogar en la navbar', () => {
      render(<App />);
      const brand = screen.getAllByText(/🌱 HuertoHogar/i)[0];
      expect(brand).toBeTruthy();
      expect(brand.tagName.toLowerCase()).toBe('a');
      expect(brand.getAttribute('href')).toBe('/');
    });

    it('muestra el enlace Home en la navegación', () => {
      render(<App />);
      const homeLink = screen.getByText(/Home/i);
      expect(homeLink).toBeTruthy();
      expect(homeLink.closest('a').getAttribute('href')).toBe('/');
    });

    it('muestra todos los enlaces de navegación principales', () => {
      render(<App />);
      const links = [
        { text: 'Home', href: '/' },
        { text: 'Productos', href: '/productos' },
        { text: 'Categorías', href: '/categorias' },
        { text: 'Ofertas', href: '/ofertas' },
        { text: 'Nosotros', href: '/nosotros' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contacto', href: '/contacto' }
      ];
      
      links.forEach(({ text, href }) => {
        const link = screen.getAllByText(new RegExp(`^${text}$`, 'i'))
          .find(el => el.closest('a')?.classList.contains('nav-link'));
        expect(link.closest('a').getAttribute('href')).toBe(href);
      });
    });
  });

  describe('Autenticación', () => {
    it('muestra los enlaces de autenticación cuando no hay usuario', () => {
      render(<App />);
      const loginLink = screen.getByText(/iniciar sesión/i);
      const registerLink = screen.getByText(/crear cuenta/i);
      
      expect(loginLink.closest('a').getAttribute('href')).toBe('/login');
      expect(registerLink.closest('a').getAttribute('href')).toBe('/register');
    });
  });

  describe('Carrito de Compras', () => {
    it('muestra el carrito con monto inicial en $0', () => {
      render(<App />);
      const cartLink = screen.getByText(/🛒.*\$0/i);
      expect(cartLink.closest('a').getAttribute('href')).toBe('/carrito');
    });
  });

  describe('Footer', () => {
    it('muestra la información de contacto', () => {
      render(<App />);
      expect(screen.getByText(/contacto@huertohogar.cl/i)).toBeTruthy();
      expect(screen.getByText(/cerrillos, santiago/i)).toBeTruthy();
      expect(screen.getByText(/\+56 9 1234 5678/i)).toBeTruthy();
    });

    it('muestra los enlaces rápidos en el footer', () => {
      render(<App />);
      const footerLinks = [
        { text: 'Productos', href: '/productos' },
        { text: 'Categorías', href: '/categorias' },
        { text: 'Ofertas', href: '/ofertas' },
        { text: 'Nosotros', href: '/nosotros' },
        { text: 'Contacto', href: '/contacto' }
      ];

      footerLinks.forEach(({ text, href }) => {
        // Buscar enlaces en el footer usando su clase específica
        const links = screen.getAllByText(new RegExp(text, 'i'));
        const footerLink = links.find(el => 
          el.closest('a')?.classList.contains('text-muted')
        );
        expect(footerLink?.closest('a').getAttribute('href')).toBe(href);
      });
    });

    it('muestra el copyright', () => {
      render(<App />);
      expect(screen.getByText(/© 2024 HuertoHogar/i)).toBeTruthy();
    });
  });
});
