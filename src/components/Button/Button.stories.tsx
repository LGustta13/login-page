import { Meta, StoryObj } from '@storybook/react';
import { ButtonProps, Button } from './';

// Configurações globais do componente que vai no sb
export default {
    title: 'Components/Button',
    component: Button,

    // propriedades do meu componente
    args: {
        children: 'Button',
    },

    argTypes: {}

} as Meta<ButtonProps>

// Daqui por diante temos várias variações do componente
export const Default: StoryObj<ButtonProps> = {}

