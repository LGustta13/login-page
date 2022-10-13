module.exports = {
  
  // Faz referência a todos os arquivos abaixo de src que tenham .stories.tsx
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },

  // Essa linha é inserida para que o storybook não se perca com as pastas quando for acessá-lo a partir do github pages
  viteFinal: (config, {configType}) => {
    if(configType === 'PRODUCTION') {
      config.base = '/lab-ds/'
    }

    return config
  }
}