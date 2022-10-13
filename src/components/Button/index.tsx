// Slot é um componente do radix no qual pode-se trocar de seletor ou tag
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type ButtonProps = {
    children: ReactNode;
    asChild?: boolean;
}

// Define-se um tamanho padrão
export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (

        // O clsx é aplicado aqui, usando classes de forma condicional
        // O Slot entra aqui se caso o asChild for true
        <Comp className={clsx(
            "text-gray-100 font-sans",
        )}>
            {children}
        </Comp>
    );
}