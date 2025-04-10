const { defineConfig } = require('cypress');
const fs = require('fs');


module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  //projectId: 'xxxxx',
  chromeWebSecurity: false,

  e2e: {
    retries: {
      runMode: 1,
      openMode: 1
    },

    setupNodeEvents(on, config) {

      var environment = config.env.environment || "hlg";
      var platform = config.env.platform || "site";

      const configPath = `./cypress/config/${environment}-${platform}.js`;
      console.log(`Tentando carregar: ${configPath}`);

      try {
        let envConfig = require(configPath);

        config.baseUrl = envConfig.baseUrl;
        config.viewportWidth = envConfig.viewportWidth;
        config.viewportHeight = envConfig.viewportHeight;

        config.env = {
          ...config.env,
          ...envConfig
        };
      } catch (error) {
        console.error(`Erro ao carregar configuração: ${error.message}`);
        throw error;
      }
      return config;
    },
  },
});
