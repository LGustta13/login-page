import { Meta, StoryObj } from '@storybook/react';
import { TextInputInputProps, TextInputRootProps, TextInput } from './';

import { Envelope } from 'phosphor-react';

// Configurações globais do componente que vai no sb
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,

    // propriedades do meu componente 
    args: {
        children: [

            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your e-mail address" />

        ],
    },

    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

// Daqui por diante temos várias variações do componente
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your e-mail address" />
    }
}