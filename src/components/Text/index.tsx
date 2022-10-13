// Slot é um componente do radix no qual pode-se trocar de seletor ou tag
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type TextProps = {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

// Define-se um tamanho padrão
export function Text({ size = 'md', children, asChild, className }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (

        // O clsx é aplicado aqui, usando classes de forma condicional
        // O Slot entra aqui se caso o asChild for true
        <Comp className={clsx(
            "text-gray-100 font-sans",
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            },
            className,
        )}>
            {children}
        </Comp>
    );
}