// Slot é um componente do radix no qual pode-se trocar de seletor ou tag
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    asChild?: boolean;
}

// Define-se um tamanho padrão
export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (

        // O clsx é aplicado aqui, usando classes de forma condicional
        // O Slot entra aqui se caso o asChild for true
        // Na estilização com o tailwind, lembrar que as medidas são em rem (py-1 = 0,25rem = 4px)
        <Comp className={clsx(
            "py-3 px-4, bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
            className,
        )}
            {...props}
        >
            {children}
        </Comp>
    );
}