import { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps, Checkbox } from './';
import { Text } from '../Text';

// Configurações globais do componente que vai no sb
export default {
    title: 'Components/Checkbox',
    component: Checkbox,

    // propriedades do meu componente
    args: {},

    argTypes: {},

    // Os decorators permitem que seja possível adicionar outros componentes ou
    // elementos de tela juntamente ao componente deste story
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]

} as Meta<CheckboxProps>

// Daqui por diante temos várias variações do componente
export const Default: StoryObj<CheckboxProps> = {}

