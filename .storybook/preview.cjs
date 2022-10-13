import {themes} from "@storybook/theming";

// Tudo que é importado por aqui passa em todos os frames do sb
// Anteriormente o global.css estava somente no APP.tsx, porém este não tem um sb
import "../src/styles/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  // Insere o tema escuro no bloco de conteúdo do sb
  docs: {
    theme: themes.dark,
  }
}