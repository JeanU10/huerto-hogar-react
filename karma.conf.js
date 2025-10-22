// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/tests/setup/karma.setup.js',
      'src/tests/**/*.test.js',
      'src/tests/**/*.test.jsx',
      'src/**/*.test.js',
      'src/**/*.test.jsx'
    ],
    exclude: [],
    preprocessors: {
      'src/tests/setup/karma.setup.js': ['webpack'],
      'src/tests/**/*.test.js': ['webpack'],
      'src/tests/**/*.test.jsx': ['webpack'],
      'src/**/*.test.js': ['webpack'],
      'src/**/*.test.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      subdir: '.'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-coverage'
    ]
  });
};