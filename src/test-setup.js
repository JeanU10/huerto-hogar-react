// Define expect.extend before loading jest-dom
if (typeof jasmine !== 'undefined' && typeof expect !== 'undefined') {
  if (!expect.extend) {
    expect.extend = (matchers) => {
      const jasmineMatchers = {};
      Object.keys(matchers).forEach((name) => {
        jasmineMatchers[name] = () => ({
          compare: (actual, expected) => {
            const result = matchers[name](actual, expected);
            return {
              pass: !!result.pass,
              message: typeof result.message === 'function' ? result.message() : result.message
            };
          }
        });
      });
      jasmine.addMatchers(jasmineMatchers);
    };
  }
}

beforeAll(() => {
  if (typeof jasmine !== 'undefined' && typeof expect !== 'undefined') {
    const jestDom = require('@testing-library/jest-dom');
    const matchers = {};
    
    // Map jest-dom matchers to jasmine matchers
    Object.keys(jestDom).forEach(matcherName => {
      if (typeof jestDom[matcherName] === 'function') {
        matchers[matcherName] = function(actual, ...args) {
          return {
            compare: function() {
              try {
                jestDom[matcherName](actual, ...args);
                return { pass: true };
              } catch (err) {
                return { 
                  pass: false,
                  message: err.message 
                };
              }
            }
          };
        };
      }
    });

    jasmine.addMatchers(matchers);
  }
});

// Add matchMedia mock if needed
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  });
}

