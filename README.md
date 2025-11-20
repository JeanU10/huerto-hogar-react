<div align="center">

# 🌱 HuertoHogar

### Plataforma de Productos Orgánicos - Conectando el campo con tu hogar

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Node](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-9+-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

<br>

<img src="public/images/logo.png" alt="HuertoHogar Logo" width="200" height="200">

[🚀 Características](#-características-principales) • [⚙️ Instalación](#-instalación-y-configuración) • [📖 Documentación](#-documentación) • [🤝 Contribuir](#-contribución) • [📝 Licencia](#-licencia)

</div>

---

## 📋 Tabla de Contenidos

- [📖 Acerca del Proyecto](#-acerca-del-proyecto)
- [🎯 Objetivos](#-objetivos-principales)
- [✨ Características Principales](#-características-principales)
- [🚀 Tecnologías](#-tecnologías-utilizadas)
- [⚙️ Instalación y Configuración](#-instalación-y-configuración)
- [🛠️ Scripts Disponibles](#️-scripts-disponibles)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Diseño y UX](#-diseño-y-ux)
- [🧪 Testing](#-testing)
- [📦 Deployment](#-deployment)
- [🤝 Contribución](#-contribución)
- [👥 Equipo](#-equipo)
- [📞 Contacto](#-contacto-y-soporte)
- [📄 Licencia](#-licencia)

---

## 📖 Acerca del Proyecto

**HuertoHogar** es una plataforma web innovadora y completa que conecta directamente a las familias chilenas con productores locales de alimentos orgánicos y frescos. Nuestra misión es promover una alimentación saludable y sostenible, apoyando a los agricultores locales mientras cuidamos el medio ambiente.

### 🎯 Objetivos Principales

| Objetivo | Descripción |
|----------|-------------|
| 🌾 **Frescura Garantizada** | Productos directamente del campo a tu mesa, garantizando la máxima frescura y calidad |
| 🌱 **Sostenibilidad** | Apoyo a la agricultura orgánica y prácticas responsables con el medio ambiente |
| 🤝 **Comunidad Local** | Conexión directa con productores chilenos, fortaleciendo la economía local |
| 🚚 **Accesibilidad** | Cobertura nacional con entrega a domicilio, llevando productos frescos a todo Chile |
| 💚 **Bienestar** | Promoción de una alimentación saludable y consciente |

---

## ✨ Características Principales

### 🛒 **E-commerce Completo**

- ✅ **Catálogo de Productos**: Organizado por categorías con búsqueda y filtrado avanzado
- 🛍️ **Carrito de Compras**: Intuitivo con persistencia de datos y gestión de cantidades
- 🎯 **Sistema de Ofertas**: Productos destacados y promociones especiales
- 💳 **Checkout Seguro**: Proceso de compra completo con validación de datos
- 📦 **Gestión de Pedidos**: Sistema de seguimiento y confirmación de pedidos

### 📱 **Experiencia de Usuario**

- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y escritorio
- 🎨 **Interfaz Moderna**: UI/UX intuitiva y atractiva con Bootstrap 5
- 🔍 **Búsqueda Inteligente**: Filtrado y búsqueda de productos en tiempo real
- 🔐 **Autenticación Segura**: Sistema de login y registro con Context API
- 🔔 **Notificaciones**: Sistema de alertas con react-toastify

### 🌿 **Categorías de Productos**

| Categoría | Productos Disponibles |
|-----------|----------------------|
| 🍎 **Frutas** | Manzanas, fresas y más frutas de temporada |
| 🥬 **Verduras** | Lechugas, tomates, zanahorias, espinacas |
| 🥛 **Lácteos** | Leche fresca de granjas locales |
| 🍯 **Procesados** | Miel natural y productos artesanales |

### 👨‍💼 **Panel de Administración**

- 📊 **Dashboard**: Vista general de ventas y estadísticas
- 📝 **Gestión de Productos**: CRUD completo para productos
- 📋 **Gestión de Pedidos**: Administración y seguimiento de órdenes
- 🔒 **Rutas Protegidas**: Sistema de guards para acceso administrativo

### 📚 **Contenido Educativo**

- 📖 **Blog**: Artículos sobre alimentación saludable
- 🌱 **Guías**: Tutoriales para iniciar tu propio huerto casero
- 🍳 **Recetas**: Recetas deliciosas con ingredientes orgánicos

---

## 🚀 Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.2.0 | Biblioteca de interfaz de usuario |
| **React Router DOM** | 7.9.4 | Navegación SPA y enrutamiento |
| **Bootstrap** | 5.3.8 | Framework CSS responsive |
| **React Bootstrap** | 2.10.10 | Componentes Bootstrap para React |
| **React Toastify** | 11.0.5 | Sistema de notificaciones |
| **Axios** | 1.13.2 | Cliente HTTP para peticiones API |

### Desarrollo y Build

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **Create React App** | 5.0.1 | Herramienta de configuración inicial |
| **React Scripts** | 5.0.1 | Scripts de desarrollo y build |
| **Webpack** | 5.102.1 | Bundler de módulos |
| **Babel** | 7.28.4 | Transpilador de JavaScript |
| **ESLint** | - | Linter para calidad de código |

### Testing

| Framework | Propósito | Archivos de Configuración |
|-----------|-----------|---------------------------|
| **Jest** | Framework principal de testing | `jest.config.js` |
| **Jasmine** | Framework alternativo de testing | `jasmine.json` |
| **Karma** | Test runner para múltiples navegadores | `karma.conf.js` |
| **React Testing Library** | Utilidades para testing de React | - |

### Gestión de Estado y Datos

| Tecnología | Propósito |
|------------|-----------|
| **Context API** | Estado global para autenticación |
| **LocalStorage** | Persistencia de datos del cliente |
| **React Hooks** | Gestión de estado local en componentes |

---

## ⚙️ Instalación y Configuración

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 14 o superior ([Descargar Node.js](https://nodejs.org/))
- **npm** versión 9 o superior (incluido con Node.js)
- **Git** para clonar el repositorio

### Pasos de Instalación

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/huerto-hogar-react.git
cd huerto-hogar-react
```

#### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

#### 3. Ejecutar en Modo Desarrollo

```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000) en tu navegador predeterminado.

#### 4. Construir para Producción

```bash
npm run build
```

Esto creará una carpeta `build` con los archivos optimizados listos para producción.

---

## 🛠️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

| Comando | Descripción |
|---------|-------------|
| `npm start` | Ejecuta la aplicación en modo desarrollo en [http://localhost:3000](http://localhost:3000) |
| `npm test` | Ejecuta las pruebas unitarias en modo interactivo (Jest) |
| `npm run test:jest` | Ejecuta tests con Jest |
| `npm run test:jasmine` | Ejecuta tests con Jasmine |
| `npm run test:karma` | Ejecuta tests con Karma (modo watch) |
| `npm run test:all` | Ejecuta todos los frameworks de testing |
| `npm run test:coverage` | Genera reporte de cobertura de tests |
| `npm run build` | Construye la aplicación para producción en la carpeta `build` |
| `npm run eject` | Expone la configuración de webpack (acción irreversible) |

### Comandos de Testing Detallados

```bash
# Ejecutar tests con Jest (interactivo)
npm test

# Ejecutar tests con Jest en modo único
npm run test:jest -- --watchAll=false

# Ejecutar tests con Karma (ejecución única)
npx karma start --single-run

# Ejecutar tests con Karma (modo watch)
npx karma start

# Ejecutar tests con Karma en Chrome
npx karma start --browsers Chrome

# Generar reporte de cobertura
npm run test:coverage
```

---

## 📁 Estructura del Proyecto

```
huerto-hogar-react/
│
├── 📂 public/                    # Archivos estáticos públicos
│   ├── 📂 images/                # Imágenes de la aplicación
│   │   ├── 📂 categories/        # Imágenes de categorías
│   │   ├── 📂 products/          # Imágenes de productos
│   │   └── 📂 blog/              # Imágenes del blog
│   ├── favicon.ico               # Icono de la aplicación
│   ├── index.html                # HTML principal
│   ├── manifest.json             # Manifest PWA
│   └── robots.txt                # Configuración para crawlers
│
├── 📂 src/                       # Código fuente principal
│   ├── 📂 components/            # Componentes reutilizables
│   │   ├── 📂 CartItem/          # Componente de item del carrito
│   │   ├── 📂 CategoryCard/      # Tarjeta de categoría
│   │   ├── 📂 Footer/            # Pie de página
│   │   ├── 📂 Navbar/            # Barra de navegación
│   │   └── 📂 ProductCard/       # Tarjeta de producto
│   │
│   ├── 📂 context/               # Context API para estado global
│   │   └── AuthContext.jsx       # Contexto de autenticación
│   │
│   ├── 📂 controllers/           # Controladores de lógica de negocio
│   │   └── categoryController.js # Controlador de categorías
│   │
│   ├── 📂 data/                  # Datos mock y funciones
│   │   └── mockData.js           # Datos de prueba
│   │
│   ├── 📂 pages/                 # Páginas principales de la aplicación
│   │   ├── 📂 Admin/             # Panel de administración
│   │   │   ├── Dashboard.jsx     # Dashboard principal
│   │   │   ├── OrdersList.jsx    # Lista de pedidos
│   │   │   ├── ProductForm.jsx   # Formulario de productos
│   │   │   └── ProductsList.jsx  # Lista de productos admin
│   │   │
│   │   ├── 📂 Auth/              # Autenticación
│   │   │   ├── Login.jsx         # Página de login
│   │   │   └── Register.jsx      # Página de registro
│   │   │
│   │   ├── 📂 Blog/              # Blog y artículos
│   │   │   ├── Blog.jsx          # Lista de artículos
│   │   │   └── BlogDetail.jsx    # Detalle de artículo
│   │   │
│   │   ├── 📂 Cart/              # Carrito de compras
│   │   │   └── Cart.jsx          # Página del carrito
│   │   │
│   │   ├── 📂 Categories/        # Categorías
│   │   │   └── Categories.jsx    # Lista de categorías
│   │   │
│   │   ├── 📂 Checkout/          # Proceso de compra
│   │   │   └── Checkout.jsx      # Página de checkout
│   │   │
│   │   ├── 📂 Contacto/          # Contacto
│   │   │   └── Contacto.jsx      # Página de contacto
│   │   │
│   │   ├── 📂 Home/              # Página principal
│   │   │   ├── Home.jsx          # Componente principal
│   │   │   └── Home.css          # Estilos del home
│   │   │
│   │   ├── 📂 Nosotros/          # Sobre nosotros
│   │   │   └── Nosotros.jsx      # Página informativa
│   │   │
│   │   ├── 📂 Ofertas/           # Ofertas especiales
│   │   │   └── Ofertas.jsx       # Página de ofertas
│   │   │
│   │   ├── 📂 PaymentError/      # Error de pago
│   │   │   └── PaymentError.jsx  # Página de error
│   │   │
│   │   ├── 📂 PaymentSuccess/    # Pago exitoso
│   │   │   └── PaymentSuccess.jsx # Página de éxito
│   │   │
│   │   ├── 📂 ProductDetail/     # Detalle de producto
│   │   │   └── ProductDetail.jsx # Página de detalle
│   │   │
│   │   └── 📂 Products/          # Catálogo de productos
│   │       └── Products.jsx      # Lista de productos
│   │
│   ├── 📂 routes/                # Configuración de rutas
│   │   ├── categories.js         # Rutas de categorías
│   │   └── guards.jsx            # Guards de rutas protegidas
│   │
│   ├── 📂 services/              # Servicios y APIs
│   │   └── api.js                # Cliente API
│   │
│   ├── 📂 tests/                 # Tests unitarios e integración
│   │   ├── 📂 components/        # Tests de componentes
│   │   ├── 📂 crud/              # Tests CRUD
│   │   ├── 📂 integration/       # Tests de integración
│   │   ├── 📂 pages/             # Tests de páginas
│   │   └── 📂 utils/             # Tests de utilidades
│   │
│   ├── App.js                    # Componente raíz de la aplicación
│   ├── App.css                   # Estilos globales del App
│   ├── index.js                  # Punto de entrada de React
│   ├── index.css                 # Estilos globales
│   ├── setupTests.js             # Configuración de tests
│   └── reportWebVitals.js        # Métricas de rendimiento
│
├── 📂 tests/                     # Tests adicionales (legacy)
│
├── 📄 .gitignore                 # Archivos ignorados por Git
├── 📄 jasmine.json               # Configuración de Jasmine
├── 📄 jest.config.js             # Configuración de Jest
├── 📄 karma.conf.js              # Configuración de Karma
├── 📄 package.json               # Dependencias y scripts del proyecto
├── 📄 package-lock.json          # Lock de dependencias
├── 📄 vercel.json                # Configuración de Vercel
└── 📄 README.md                  # Este archivo
```

---

## 🎨 Diseño y UX

### Paleta de Colores

La paleta de colores está diseñada para transmitir frescura, naturaleza y confianza:

| Color | Código | Uso |
|-------|--------|-----|
| 🟢 **Verde Principal** | `#2d5f2e` | Naturaleza y frescura - Botones principales, acentos |
| 🟢 **Verde Secundario** | `#4a9b4d` | Crecimiento y vida - Hover states, secundarios |
| 🟢 **Verde Claro** | `#e8f5e8` | Fondo suave - Backgrounds, secciones |
| ⚫ **Gris Oscuro** | `#333` | Texto principal - Tipografía principal |
| ⚪ **Blanco** | `#ffffff` | Fondo limpio - Cards, backgrounds |

### Características de Diseño

- ✅ **Responsive Design**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- ✅ **Animaciones Suaves**: Transiciones y efectos visuales cuidadosamente implementados
- ✅ **Tipografía Clara**: Legibilidad optimizada con fuentes del sistema
- ✅ **Iconografía Intuitiva**: Uso de emojis y símbolos familiares
- ✅ **Bootstrap 5**: Framework moderno para consistencia visual
- ✅ **Componentes Reutilizables**: Diseño modular y escalable

---

## 🧪 Testing

### Frameworks de Testing

El proyecto utiliza múltiples frameworks de testing para garantizar máxima calidad:

#### Jest (Framework Principal)
- Testing unitario de componentes
- Testing de utilidades y helpers
- Snapshot testing
- Mocking avanzado

#### Jasmine (Framework Alternativo)
- Testing de integración
- BDD (Behavior-Driven Development)
- Suites organizadas

#### Karma (Test Runner)
- Ejecución en múltiples navegadores
- Integración CI/CD
- Coverage reports

### Estructura de Tests

```
tests/
├── components/          # Tests de componentes React
│   ├── Navbar.test.jsx
│   └── ProductCard.test.jsx
├── crud/               # Tests CRUD
│   ├── auth.test.js
│   ├── cart.test.js
│   └── products.test.js
├── integration/        # Tests de integración
│   └── auth-flow.test.js
└── pages/              # Tests de páginas
    └── Home.test.jsx
```

### Ejecutar Tests

```bash
# Ejecutar tests con Jest (interactivo)
npm test

# Ejecutar todos los tests una vez
npm run test:all

# Generar reporte de cobertura
npm run test:coverage

# Ejecutar tests con Karma
npm run test:karma
```

### Convenciones de Testing

- ✅ Seguir el patrón **AAA** (Arrange-Act-Assert)
- ✅ Tests independientes y atómicos
- ✅ Mockear servicios externos
- ✅ Descripciones claras y descriptivas
- ✅ Cobertura mínima del 70%

---

## 📦 Deployment

### Preparación para Producción

1. **Construir la aplicación**:
   ```bash
   npm run build
   ```

2. **Probar el build localmente** (opcional):
   ```bash
   npx serve -s build
   ```

### Plataformas de Deployment

El proyecto está configurado para deployment en múltiples plataformas:

#### Vercel (Recomendado)
- Configuración incluida: `vercel.json`
- Deployment automático desde GitHub
- URL: `https://huerto-hogar.vercel.app`

#### Netlify
- Build command: `npm run build`
- Publish directory: `build`
- Configuración personalizada en `netlify.toml` (opcional)

#### GitHub Pages
- Configurar en `package.json`:
  ```json
  "homepage": "https://tu-usuario.github.io/huerto-hogar-react"
  ```

### Variables de Entorno

Para producción, configurar:

```env
REACT_APP_API_URL=https://api.huertohogar.cl
REACT_APP_ENV=production
```

---

## 🤝 Contribución

¡Las contribuciones son siempre bienvenidas! Por favor, sigue estos pasos:

### Proceso de Contribución

1. **Fork del Proyecto**
   - Haz fork del repositorio en GitHub

2. **Crear una Rama**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Realizar Cambios**
   - Implementa tus cambios
   - Sigue las convenciones de código existentes
   - Añade tests si es necesario

4. **Commit de Cambios**
   ```bash
   git commit -m 'feat: agregar nueva funcionalidad'
   ```
   
   Usa convenciones de commits:
   - `feat`: Nueva funcionalidad
   - `fix`: Corrección de bug
   - `docs`: Documentación
   - `style`: Formato, punto y coma faltante, etc.
   - `refactor`: Refactorización de código
   - `test`: Agregar tests
   - `chore`: Mantenimiento

5. **Push a la Rama**
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

6. **Abrir Pull Request**
   - Describe claramente los cambios
   - Referencia issues relacionados si los hay

### Estándares de Código

- ✅ Seguir las convenciones de **ESLint**
- ✅ Escribir **tests** para nuevas funcionalidades
- ✅ Documentar cambios importantes
- ✅ Mantener la **coherencia del diseño**
- ✅ Código limpio y legible
- ✅ Comentarios cuando sea necesario

### Reportar Issues

Si encuentras un bug o tienes una sugerencia:

1. Verifica que el issue no exista ya
2. Crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si aplica

---

## 👥 Equipo

<div align="center">

### Desarrolladores

| Nombre | Rol | GitHub |
|--------|-----|--------|
| **Jean P. Valenzuela Navarrete** | Desarrollador Full Stack | [@jeanvalenzuela](https://github.com/JeanU10) |
| **Matias Eduardo Reyes Agilera** | Desarrollador Full Stack | [@matiasreyes](https://github.com/MatiasReyes1925) |

</div>

---

## 📞 Contacto y Soporte

### Información de Contacto

| Método | Información |
|--------|-------------|
| 📧 **Email** | contacto@huertohogar.cl |
| 📱 **Teléfono** | +56 9 1234 5678 |
| 📍 **Dirección** | Santiago, Chile |
| 🌐 **Web** | [www.huertohogar.cl](https://www.huertohogar.cl) |

### Canales de Soporte

- 📖 **Documentación**: [docs.huertohogar.cl](https://docs.huertohogar.cl)
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/huerto-hogar-react/issues)
- 💬 **Discord**: [Comunidad HuertoHogar](https://discord.gg/huertohogar)
- 📧 **Email de Soporte**: soporte@huertohogar.cl

---

## 📈 Roadmap Futuro

### Versión 2.0 🚀

- [ ] Integración con API backend completa
- [ ] Sistema de pagos en línea (Stripe, WebPay)
- [ ] Notificaciones push en tiempo real
- [ ] App móvil nativa (React Native)
- [ ] Sistema de reseñas y calificaciones
- [ ] Programa de fidelización

### Versión 3.0 🎯

- [ ] Inteligencia artificial para recomendaciones
- [ ] Sistema de suscripciones (cajas mensuales)
- [ ] Marketplace para productores independientes
- [ ] Análisis de datos avanzado (analytics)
- [ ] Integración con redes sociales
- [ ] Modo offline con Service Workers

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 HuertoHogar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Agradecimientos

- 🌾 **Productores Locales** - Por su dedicación y calidad en los productos
- ⚛️ **Comunidad React** - Por las herramientas y recursos invaluable
- 🎨 **Bootstrap Team** - Por el framework CSS excepcional
- 🤝 **Contribuidores** - Por su tiempo y esfuerzo en mejorar el proyecto
- 💚 **Usuarios** - Por confiar en HuertoHogar para sus compras orgánicas

---

<div align="center">

### Hecho con ❤️ por el equipo de HuertoHogar

**© 2025 HuertoHogar. Todos los derechos reservados.**

[⬆ Volver arriba](#-huertohogar)

</div>
