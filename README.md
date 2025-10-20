# 🌱 HuertoHogar - Plataforma de Productos Orgánicos

<div align="center">
  <img src="public/images/logo.png" alt="HuertoHogar Logo" width="200" height="200">
  
  **Conectando el campo con tu hogar**
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple.svg)](https://getbootstrap.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

## 📋 Descripción del Proyecto

**HuertoHogar** es una plataforma web innovadora que conecta directamente a las familias chilenas con productores locales de alimentos orgánicos y frescos. Nuestra misión es promover una alimentación saludable y sostenible, apoyando a los agricultores locales mientras cuidamos el medio ambiente.

### 🧑‍💻 Desarrollado por:

- **Jean P. Valenzuela Navarrete**
- **Matias Eduardo Reyes Agilera**
- **Cristobal Andres Cea Guzman**

### 🎯 Objetivos Principales

- **Frescura Garantizada**: Productos directamente del campo a tu mesa
- **Sostenibilidad**: Apoyo a la agricultura orgánica y prácticas responsables
- **Comunidad Local**: Conexión directa con productores chilenos
- **Accesibilidad**: Cobertura nacional con entrega a domicilio

---

## ✨ Características Principales

### 🛒 **E-commerce Completo**
- Catálogo de productos organizados por categorías
- Carrito de compras intuitivo
- Sistema de ofertas y productos destacados
- Proceso de checkout seguro

### 📱 **Experiencia de Usuario**
- Diseño responsive y moderno
- Navegación intuitiva
- Búsqueda y filtrado de productos
- Sistema de autenticación de usuarios

### 🌿 **Categorías de Productos**
- **Frutas**: Manzanas, fresas y más frutas de temporada
- **Verduras**: Lechugas, tomates, zanahorias, espinacas
- **Lácteos**: Leche fresca de granjas locales
- **Procesados**: Miel natural y productos artesanales

### 📚 **Contenido Educativo**
- Blog con artículos sobre alimentación saludable
- Guías para iniciar tu propio huerto casero
- Recetas con ingredientes orgánicos

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18.2.0** - Biblioteca de interfaz de usuario
- **React Router** - Navegación entre páginas
- **Bootstrap 5.3.0** - Framework CSS para diseño responsive
- **React Bootstrap** - Componentes Bootstrap para React

### Desarrollo
- **Create React App** - Herramienta de configuración inicial
- **ESLint** - Linter para mantener calidad de código
- **Karma/Jasmine** - Framework de testing
- **Webpack** - Bundler de módulos

### Testing
- **Tests de Navegación**: Verificación de rutas y enlaces
  - Logo y marca
  - Enlaces principales
  - Navegación completa
- **Tests de Autenticación**: Verificación de acceso
  - Enlaces de inicio de sesión
  - Enlaces de registro
- **Tests de Carrito**: Verificación de funcionalidad básica
  - Estado inicial del carrito
  - Enlace a la página de carrito
- **Tests de Footer**: Verificación de información
  - Datos de contacto
  - Enlaces rápidos
  - Copyright

#### Ejecutar Tests
```bash
# Ejecución única
npx karma start --single-run

# Modo desarrollo (watch mode)
npx karma start

# Modo debug con Chrome
npx karma start --browsers Chrome
```

### Almacenamiento
- **LocalStorage** - Persistencia de datos del cliente
- **Context API** - Gestión de estado global

---

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/huerto-hogar-react.git
   cd huerto-hogar-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Ejecuta la aplicación en modo desarrollo |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run build` | Construye la aplicación para producción |
| `npm run eject` | Expone la configuración de webpack |

---

## 📁 Estructura del Proyecto

```
huerto-hogar-react/
├── public/
│   ├── images/
│   │   ├── categories/     # Imágenes de categorías
│   │   ├── products/       # Imágenes de productos
│   │   └── blog/          # Imágenes del blog
│   └── index.html
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── CartItem/
│   │   ├── CategoryCard/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── ProductCard/
│   ├── context/           # Context API para estado global
│   ├── data/              # Datos mock y funciones de datos
│   ├── pages/             # Páginas principales
│   │   ├── Admin/         # Panel de administración
│   │   ├── Auth/          # Autenticación
│   │   ├── Blog/          # Blog y artículos
│   │   ├── Cart/          # Carrito de compras
│   │   ├── Categories/    # Categorías de productos
│   │   ├── Checkout/      # Proceso de compra
│   │   ├── Home/          # Página principal
│   │   └── Products/      # Catálogo de productos
│   └── routes/            # Configuración de rutas
└── package.json
```

---

## 🎨 Diseño y UX

### Paleta de Colores
- **Verde Principal**: #2d5f2e (Naturaleza y frescura)
- **Verde Secundario**: #4a9b4d (Crecimiento y vida)
- **Verde Claro**: #e8f5e8 (Fondo suave)
- **Gris Oscuro**: #333 (Texto principal)

### Características de Diseño
- **Responsive Design**: Adaptable a todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tipografía Clara**: Legibilidad optimizada
- **Iconografía Intuitiva**: Emojis y símbolos familiares

---

## 🔧 Funcionalidades Técnicas

### Gestión de Estado
- **Context API** para autenticación de usuarios
- **LocalStorage** para persistencia de datos
- **Estado local** para componentes específicos

### Rutas y Navegación
- **React Router** para navegación SPA
- **Guards de rutas** para protección de páginas
- **Navegación programática** para mejor UX

### Optimización
- **Lazy Loading** para componentes pesados
- **Code Splitting** para mejor rendimiento
- **Optimización de imágenes** para carga rápida

---

## 📈 Roadmap Futuro

### Versión 2.0
- [ ] Integración con API backend
- [ ] Sistema de pagos en línea
- [ ] Notificaciones push
- [ ] App móvil nativa

### Versión 3.0
- [ ] Inteligencia artificial para recomendaciones
- [ ] Sistema de suscripciones
- [ ] Marketplace para productores
- [ ] Análisis de datos avanzado

---

## 🤝 Contribución

### Cómo Contribuir
1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

### Estándares de Código
- Seguir las convenciones de ESLint
- Escribir tests para nuevas funcionalidades
- Documentar cambios importantes
- Mantener la coherencia del diseño

---

## 🧪 Testing

### Framework y Herramientas
- **Karma**: Test runner para ejecutar los tests
- **Jasmine**: Framework de testing
- **React Testing Library**: Librería para testing de componentes React
- **Chrome Headless**: Navegador para ejecución de tests

### Test Suites Principales
1. **Tests de Navegación**
   - Verificación de rutas y redirecciones
   - Funcionamiento de guards de rutas
   - Comportamiento del navbar

2. **Tests de Autenticación**
   - Login de usuarios
   - Registro de usuarios
   - Persistencia de sesión

3. **Tests de Carrito de Compras**
   - Agregar/remover productos
   - Actualizar cantidades
   - Cálculo de totales

4. **Tests de Componentes UI**
   - Footer y links
   - ProductCard y renderizado
   - CategoryCard y navegación

### Ejecución de Tests
1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar todos los tests:
   ```bash
   npm test
   ```

3. Ejecutar tests con coverage:
   ```bash
   npm run test:coverage
   ```

### Convenciones de Testing
- Usar descripciones claras para los test suites y casos
- Seguir el patrón AAA (Arrange-Act-Assert)
- Mantener tests independientes y atómicos
- Mockear servicios externos cuando sea necesario

---

## 📞 Contacto y Soporte

### Información de Contacto
- **Email**: contacto@huertohogar.cl
- **Teléfono**: +56 9 1234 5678
- **Dirección**: Santiago, Chile

### Soporte Técnico
- **Documentación**: [docs.huertohogar.cl](https://docs.huertohogar.cl)
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/huerto-hogar-react/issues)
- **Discord**: [Comunidad HuertoHogar](https://discord.gg/huertohogar)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **Productores Locales** - Por su dedicación y calidad
- **Comunidad React** - Por las herramientas y recursos
- **Bootstrap Team** - Por el framework CSS
- **Contribuidores** - Por su tiempo y esfuerzo

---

<div align="center">
  <p>Hecho con ❤️ por el equipo de HuertoHogar</p>
  <p>© 2025 HuertoHogar. Todos los derechos reservados.</p>
</div>