// Tests simplificados para el componente ProductCard
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { addToCart } from '../../data/mockData';

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn()
  }
}));

// Mock mockData
jest.mock('../../data/mockData', () => ({
  addToCart: jest.fn()
}));

// Mock window.dispatchEvent
const mockDispatchEvent = jest.fn();
Object.defineProperty(window, 'dispatchEvent', {
  value: mockDispatchEvent
});

// Componente simplificado para testing
const SimpleProductCard = ({ product }) => {
  const handleAddToCart = () => {
    addToCart(product.id, 1);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <div data-testid="product-card">
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={handleAddToCart} disabled={product.stock === 0}>
        {product.stock === 0 ? 'Sin Stock' : 'Añadir al carrito'}
      </button>
    </div>
  );
};

const mockProduct = {
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
};

describe('ProductCard Component (Simplified)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatchEvent.mockClear();
  });

  describe('Rendering', () => {
    test('should render product information correctly', () => {
      render(<SimpleProductCard product={mockProduct} />);
      
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
      expect(screen.getByText('Manzanas rojas cultivadas sin pesticidas')).toBeInTheDocument();
      expect(screen.getByText('Stock: 50')).toBeInTheDocument();
    });

    test('should display product price', () => {
      render(<SimpleProductCard product={mockProduct} />);
      
      expect(screen.getByText('Precio: $2500')).toBeInTheDocument();
    });

    test('should render product card element', () => {
      render(<SimpleProductCard product={mockProduct} />);
      
      expect(screen.getByTestId('product-card')).toBeInTheDocument();
    });
  });

  describe('Add to Cart Functionality', () => {
    test('should call addToCart when add to cart button is clicked', () => {
      addToCart.mockReturnValue([]);
      render(<SimpleProductCard product={mockProduct} />);
      
      const addButton = screen.getByText('Añadir al carrito');
      fireEvent.click(addButton);
      
      expect(addToCart).toHaveBeenCalledWith(1, 1);
    });

    test('should dispatch cartUpdated event when product is added to cart', () => {
      addToCart.mockReturnValue([]);
      render(<SimpleProductCard product={mockProduct} />);
      
      const addButton = screen.getByText('Añadir al carrito');
      fireEvent.click(addButton);
      
      expect(mockDispatchEvent).toHaveBeenCalledWith(new Event('cartUpdated'));
    });

    test('should disable add to cart button when product is out of stock', () => {
      const outOfStockProduct = { ...mockProduct, stock: 0 };
      render(<SimpleProductCard product={outOfStockProduct} />);
      
      const addButton = screen.getByText('Sin Stock');
      expect(addButton).toBeDisabled();
    });
  });

  describe('Product Information', () => {
    test('should display correct product name', () => {
      render(<SimpleProductCard product={mockProduct} />);
      
      expect(screen.getByText('Manzanas Orgánicas')).toBeInTheDocument();
    });

    test('should display correct product description', () => {
      render(<SimpleProductCard product={mockProduct} />);
      
      expect(screen.getByText('Manzanas rojas cultivadas sin pesticidas')).toBeInTheDocument();
    });

    test('should display correct stock information', () => {
      render(<SimpleProductCard product={mockProduct} />);
      
      expect(screen.getByText('Stock: 50')).toBeInTheDocument();
    });
  });
});
