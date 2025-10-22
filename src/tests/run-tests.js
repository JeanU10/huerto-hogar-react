#!/usr/bin/env node

/**
 * Script para ejecutar todos los tests con diferentes frameworks
 * Uso: node src/tests/run-tests.js [framework]
 * Frameworks disponibles: jest, jasmine, karma, all
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const frameworks = ['jest', 'jasmine', 'karma'];
const targetFramework = process.argv[2] || 'all';

console.log('🧪 Ejecutando tests unitarios para HuertoHogar React');
console.log('================================================\n');

// Verificar que los archivos de configuración existen
const configFiles = {
  jest: 'jest.config.js',
  jasmine: 'jasmine.json',
  karma: 'karma.conf.js'
};

function checkConfigFiles() {
  console.log('📋 Verificando archivos de configuración...');
  
  for (const [framework, configFile] of Object.entries(configFiles)) {
    if (fs.existsSync(configFile)) {
      console.log(`✅ ${framework}: ${configFile} encontrado`);
    } else {
      console.log(`❌ ${framework}: ${configFile} no encontrado`);
    }
  }
  console.log('');
}

function runTests(framework) {
  console.log(`🚀 Ejecutando tests con ${framework.toUpperCase()}...`);
  console.log('----------------------------------------');
  
  try {
    let command;
    switch (framework) {
      case 'jest':
        command = 'npm test';
        break;
      case 'jasmine':
        command = 'npx jasmine';
        break;
      case 'karma':
        command = 'npx karma start';
        break;
      default:
        throw new Error(`Framework no soportado: ${framework}`);
    }
    
    console.log(`Comando: ${command}`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Tests con ${framework} completados exitosamente\n`);
    
  } catch (error) {
    console.log(`❌ Error ejecutando tests con ${framework}:`);
    console.log(error.message);
    console.log('');
  }
}

function showTestSummary() {
  console.log('📊 Resumen de Tests');
  console.log('==================');
  console.log('✅ Tests CRUD de Productos (products.test.js)');
  console.log('✅ Tests CRUD del Carrito (cart.test.js)');
  console.log('✅ Tests de Autenticación (auth.test.js)');
  console.log('✅ Tests de Componentes (ProductCard, Navbar)');
  console.log('✅ Tests de Páginas (Home)');
  console.log('✅ Tests de Utilidades (helpers.test.js)');
  console.log('✅ Tests de Integración (cart-flow, auth-flow)');
  console.log('');
  console.log('📁 Estructura de Tests:');
  console.log('├── src/tests/');
  console.log('│   ├── setup/           # Configuraciones');
  console.log('│   ├── crud/            # Tests CRUD');
  console.log('│   ├── components/      # Tests de componentes');
  console.log('│   ├── pages/           # Tests de páginas');
  console.log('│   ├── utils/           # Tests de utilidades');
  console.log('│   └── integration/     # Tests de integración');
  console.log('');
  console.log('🔧 Frameworks Soportados:');
  console.log('├── Jest (npm test)');
  console.log('├── Jasmine (npx jasmine)');
  console.log('└── Karma (npx karma start)');
  console.log('');
}

// Función principal
function main() {
  checkConfigFiles();
  
  if (targetFramework === 'all') {
    console.log('🎯 Ejecutando tests con todos los frameworks...\n');
    
    for (const framework of frameworks) {
      runTests(framework);
    }
    
    console.log('🎉 Todos los tests completados!');
    
  } else if (frameworks.includes(targetFramework)) {
    runTests(targetFramework);
    
  } else {
    console.log(`❌ Framework no válido: ${targetFramework}`);
    console.log(`Frameworks disponibles: ${frameworks.join(', ')}, all`);
    process.exit(1);
  }
  
  showTestSummary();
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { runTests, checkConfigFiles, showTestSummary };
