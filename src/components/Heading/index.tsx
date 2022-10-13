// Slot é um componente do radix no qual pode-se trocar de seletor ou tag
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type HeadingProps = {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

// Define-se um tamanho padrão
export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (

        // O clsx é aplicado aqui, usando classes de forma condicional
        // O Slot entra aqui se caso o asChild for true
        <Comp className={clsx(
            "text-gray-100 font-bold font-sans",
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg'
            },
            className
        )}>
            {children}
        </Comp>
    );
}