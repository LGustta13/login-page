import { Meta, StoryObj } from '@storybook/react';
import { HeadingProps, Heading } from './';

// Configurações globais do componente que vai no sb
export default {
    title: 'Components/Heading',
    component: Heading,

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
} as Meta<HeadingProps>

// Daqui por diante temos várias variações do componente
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Testando com tag h1</h1>
        )
    },

    // Aqui desabilitou o control para o children, pois estava aparecendo informações desnecessárias
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}
