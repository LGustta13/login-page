import { Meta, StoryObj } from '@storybook/react';
import { TextProps, Text } from './';

// Configurações globais do componente que vai no sb
export default {
    title: 'Components/Text',
    component: Text,

    // propriedades do meu componente
    args: {
        children: 'Lorem ipsum',
        size: 'md'
        //Por padrão, como size no componente recebe size='md', não é necessário inserir novamente aqui
    },

    argTypes: {
        // Cria uma opção no qual é possível selecionar (checkbox) qual tamanho de fonte
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

// Daqui por diante temos várias variações do componente
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },

    // Aqui desabilitou o control para o children, pois estava aparecendo informações desnecessárias
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
}

