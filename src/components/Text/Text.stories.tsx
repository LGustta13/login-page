import { Meta, StoryObj } from '@storybook/react';
import { TextProps, Text } from './';

// Configurações globais do componente que vai no sb
export default {
    title: 'Components/Text',
    component: Text,

    // propriedades do meu componente
    args: {
        children: 'Lorem ipsum',
        //Por padrão, como size no componente recebe size='md', não é necessário inserir novamente aqui
    }
} as Meta<TextProps>

// Daqui por diante temos várias variações do componente
export const Default: StoryObj = {}

export const Small: StoryObj = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj = {
    args: {
        size: 'lg'
    }
}