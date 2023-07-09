module.exports = {
  ...(on, config) => {
    config.testingType = "e2e";
    config.e2e.specPattern = "**/*.feature";

    // Define quaisquer outros eventos ou configurações aqui, se necessário

    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
