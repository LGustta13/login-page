// Arquivoi criado para manipular o thema escuro que aparece no storybook

import { addons } from "@storybook/addons";
import {themes} from "@storybook/theming";

addons.setConfig({

    // Insere o tema escuro (deve-se reiniciar o storybook)
    theme: themes.dark,
})