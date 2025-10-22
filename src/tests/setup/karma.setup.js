// Karma setup configuration
import '@testing-library/jest-dom';

// Mock localStorage for Karma
const localStorageMock = {
  getItem: function(key) {
    return this.store[key] || null;
  },
  setItem: function(key, value) {
    this.store[key] = value.toString();
  },
  removeItem: function(key) {
    delete this.store[key];
  },
  clear: function() {
    this.store = {};
  },
  store: {}
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: function(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function() {},
      removeListener: function() {},
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() {}
    };
  }
});

// Mock IntersectionObserver
window.IntersectionObserver = function() {
  this.disconnect = function() {};
  this.observe = function() {};
  this.unobserve = function() {};
};

// Mock ResizeObserver
window.ResizeObserver = function() {
  this.disconnect = function() {};
  this.observe = function() {};
  this.unobserve = function() {};
};
