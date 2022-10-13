import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

// Tinhamos que colocar a propriedade placeholder nativa dentro da tipagem
// Mas ela é padrão da tag input.. assim extendendo de InputHTMLAttributes
// conseguimos passar ela para o elemento dentro do storybook
export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {}

export type TextInputRootProps = {
    children: ReactNode;
}

export type TextInputIconProps = {
    children: ReactNode;
}

// Estamos criando várias variações do componente InputText. Cada variação é um novo componente.
// Por fim, vamos chamar mais de um componente para criar um novo que será mais putil para a interface
// As variações são criadas justamente para colocar no sb
function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    );
}

TextInputRoot.displayName = 'TextInput.Root';

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    );
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    );
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}