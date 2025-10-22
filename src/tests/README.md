# Tests Unitarios - HuertoHogar React

Este directorio contiene todos los tests unitarios para el proyecto HuertoHogar React, organizados de manera profesional y estructurada dentro de la carpeta `src`.

## Estructura de Carpetas

```
src/tests/
├── __init__.js                 # Archivo de inicialización
├── __mocks__/                  # Mocks para archivos estáticos
│   └── fileMock.js
├── setup/                      # Configuraciones de setup
│   ├── jest.setup.js          # Setup para Jest
│   ├── karma.setup.js         # Setup para Karma
│   └── jasmine.setup.js       # Setup para Jasmine
├── crud/                       # Tests para operaciones CRUD
│   ├── products.test.js       # Tests CRUD de productos
│   ├── cart.test.js           # Tests CRUD del carrito
│   └── auth.test.js           # Tests de autenticación
├── components/                 # Tests de componentes
│   ├── ProductCard.test.jsx   # Tests del componente ProductCard
│   └── Navbar.test.jsx        # Tests del componente Navbar
├── pages/                      # Tests de páginas
│   └── Home.test.jsx          # Tests de la página Home
├── utils/                      # Tests de utilidades
│   └── helpers.test.js        # Tests de funciones helper
├── integration/                # Tests de integración
│   ├── cart-flow.test.js      # Flujo completo del carrito
│   └── auth-flow.test.js      # Flujo completo de autenticación
└── README.md                   # Este archivo
```

## Frameworks de Testing Soportados

### Jest
- **Configuración**: `jest.config.js`
- **Setup**: `src/tests/setup/jest.setup.js`
- **Comando**: `npm test`

### Jasmine
- **Configuración**: `jasmine.json`
- **Setup**: `src/tests/setup/jasmine.setup.js`
- **Comando**: `npx jasmine`

### Karma
- **Configuración**: `karma.conf.js`
- **Setup**: `src/tests/setup/karma.setup.js`
- **Comando**: `npx karma start`

## Tests Implementados

### 1. Operaciones CRUD de Productos (`src/tests/crud/products.test.js`)
- ✅ GET: Obtener productos, por ID, por categoría, ofertas, destacados
- ✅ CREATE: Crear nuevos productos con ID único
- ✅ UPDATE: Actualizar productos existentes
- ✅ DELETE: Eliminar productos
- ✅ Integridad de datos

### 2. Operaciones CRUD del Carrito (`src/tests/crud/cart.test.js`)
- ✅ GET: Obtener carrito y total
- ✅ CREATE: Añadir productos al carrito
- ✅ UPDATE: Actualizar cantidades
- ✅ DELETE: Remover productos y limpiar carrito
- ✅ Cálculos de totales
- ✅ Persistencia de datos

### 3. Autenticación (`src/tests/crud/auth.test.js`)
- ✅ Estado inicial no autenticado
- ✅ LOGIN: Autenticación de usuarios y admins
- ✅ LOGOUT: Cerrar sesión y limpiar estado
- ✅ Persistencia en localStorage
- ✅ Manejo de errores

### 4. Componentes (`src/tests/components/`)
- ✅ **ProductCard**: Renderizado, funcionalidad de carrito, navegación
- ✅ **Navbar**: Estados de autenticación, carrito, navegación

### 5. Páginas (`src/tests/pages/`)
- ✅ **Home**: Renderizado, datos, navegación

### 6. Utilidades (`src/tests/utils/helpers.test.js`)
- ✅ Formateo de precios
- ✅ Cálculo de descuentos
- ✅ Validación de emails
- ✅ Formateo de fechas
- ✅ Truncado de texto

### 7. Tests de Integración (`src/tests/integration/`)
- ✅ **Flujo del Carrito**: Workflow completo de carrito
- ✅ **Flujo de Autenticación**: Workflow completo de auth

## Cobertura de Tests

Los tests cubren:
- **Funcionalidades básicas**: Renderizado, eventos, navegación
- **Operaciones CRUD**: Create, Read, Update, Delete
- **Estados de autenticación**: Login, logout, roles
- **Gestión del carrito**: Añadir, actualizar, remover productos
- **Persistencia de datos**: localStorage
- **Manejo de errores**: Casos edge y errores
- **Integración**: Flujos completos de usuario

## Comandos de Ejecución

```bash
# Ejecutar todos los tests con Jest
npm test

# Ejecutar tests con Jasmine
npx jasmine

# Ejecutar tests con Karma
npx karma start

# Ejecutar tests específicos
npm test -- --testNamePattern="ProductCard"

# Ejecutar con cobertura
npm test -- --coverage
```

## Configuración

### Jest
- Entorno: `jsdom`
- Setup automático de mocks
- Cobertura de código
- Transformación Babel

### Jasmine
- Configuración estándar
- Setup personalizado
- Ejecución aleatoria

### Karma
- Navegador: ChromeHeadless
- Webpack para bundling
- Cobertura integrada

## Mocks y Utilidades

- **localStorage**: Mock completo para persistencia
- **window.matchMedia**: Mock para responsive design
- **IntersectionObserver**: Mock para lazy loading
- **ResizeObserver**: Mock para responsive components
- **react-toastify**: Mock para notificaciones
- **react-router-dom**: Mock para navegación

## Mejores Prácticas Implementadas

1. **Aislamiento**: Cada test es independiente
2. **Limpieza**: `beforeEach` para limpiar estado
3. **Mocks**: Uso apropiado de mocks y spies
4. **Cobertura**: Tests para casos edge y errores
5. **Integración**: Tests de flujos completos
6. **Documentación**: Tests bien documentados
7. **Organización**: Estructura clara y profesional

## Notas Importantes

- Todos los tests son compatibles con Jest, Jasmine y Karma
- Los mocks están configurados para funcionar en todos los frameworks
- La estructura es escalable y fácil de mantener
- Los tests cubren tanto funcionalidades básicas como operaciones CRUD
- Se incluyen tests de integración para flujos completos
- La carpeta tests está ahora dentro de `src/` para mejor organización
