// Tests unitarios para el componente ProductCard
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductCard from '../../src/components/ProductCard/ProductCard';
import { addToCart } from '../../src/data/mockData';

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn()
  }
}));

// Mock mockData
jest.mock('../../src/data/mockData', () => ({
  addToCart: jest.fn()
}));

// Mock window.dispatchEvent
const mockDispatchEvent = jest.fn();
Object.defineProperty(window, 'dispatchEvent', {
  value: mockDispatchEvent
});

const mockProduct = {
  id: 1,
  nombre: 'Manzanas Orgánicas',
  descripcion: 'Manzanas rojas cultivadas sin pesticidas',
  precio: 2500,
  precioOferta: 2000,
  stock: 50,
  categoria: 'frutas',
  imagen: '/images/products/manzanas.jpg',
  enOferta: true,
  destacado: true,
  unidad: 'kg'
};

const renderProductCard = (product = mockProduct) => {
  return render(
    <BrowserRouter>
      <ProductCard product={product} />
    </BrowserRouter>
  );
};

describe('ProductCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatchEvent.mockClear();
  });

  describe('Rendering', () => {
    test('should render product information correctly', () => {
      renderProductCard();
      
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
      expect(screen.getByText('Manzanas rojas cultivadas sin pesticidas')).toBeInTheDocument();
      expect(screen.getByText('Stock: 50 kg')).toBeInTheDocument();
    });

    test('should display offer badge when product is on offer', () => {
      renderProductCard();
      
      expect(screen.getByText('¡OFERTA!')).toBeInTheDocument();
    });

    test('should not display offer badge when product is not on offer', () => {
      const productWithoutOffer = { ...mockProduct, enOferta: false };
      renderProductCard(productWithoutOffer);
      
      expect(screen.queryByText('¡OFERTA!')).not.toBeInTheDocument();
    });

    test('should display correct price for offer product', () => {
      renderProductCard();
      
      expect(screen.getByText('$2,000')).toBeInTheDocument();
      expect(screen.getByText('$2,500')).toBeInTheDocument(); // Original price crossed out
    });

    test('should display correct price for regular product', () => {
      const regularProduct = { ...mockProduct, enOferta: false };
      renderProductCard(regularProduct);
      
      expect(screen.getByText('$2,500')).toBeInTheDocument();
    });

    test('should render product image with correct attributes', () => {
      renderProductCard();
      
      const image = screen.getByAltText('Manzanas Orgánicas');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/images/products/manzanas.jpg');
    });
  });

  describe('Add to Cart Functionality', () => {
    test('should call addToCart when add to cart button is clicked', () => {
      addToCart.mockReturnValue([]);
      renderProductCard();
      
      const addButton = screen.getByText('Añadir al carrito');
      fireEvent.click(addButton);
      
      expect(addToCart).toHaveBeenCalledWith(1, 1);
    });

    test('should dispatch cartUpdated event when product is added to cart', () => {
      addToCart.mockReturnValue([]);
      renderProductCard();
      
      const addButton = screen.getByText('Añadir al carrito');
      fireEvent.click(addButton);
      
      expect(mockDispatchEvent).toHaveBeenCalledWith(new Event('cartUpdated'));
    });

    test('should show success toast when product is added to cart', async () => {
      addToCart.mockReturnValue([]);
      renderProductCard();
      
      const addButton = screen.getByText('Añadir al carrito');
      fireEvent.click(addButton);
      
      await waitFor(() => {
        expect(toast.success).toHaveBeenCalled();
      });
    });

    test('should disable add to cart button when product is out of stock', () => {
      const outOfStockProduct = { ...mockProduct, stock: 0 };
      renderProductCard(outOfStockProduct);
      
      const addButton = screen.getByText('Sin Stock');
      expect(addButton).toBeDisabled();
    });
  });

  describe('Navigation', () => {
    test('should render link to product detail page', () => {
      renderProductCard();
      
      const detailLink = screen.getByText('Ver detalles');
      expect(detailLink.closest('a')).toHaveAttribute('href', '/producto/1');
    });
  });

  describe('Accessibility', () => {
    test('should have proper alt text for product image', () => {
      renderProductCard();
      
      const image = screen.getByAltText('Manzanas Orgánicas');
      expect(image).toBeInTheDocument();
    });

    test('should have proper button text for different states', () => {
      const outOfStockProduct = { ...mockProduct, stock: 0 };
      renderProductCard(outOfStockProduct);
      
      expect(screen.getByText('Sin Stock')).toBeInTheDocument();
    });
  });
});
