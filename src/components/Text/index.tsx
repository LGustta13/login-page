import { clsx } from 'clsx';

export type TextProps = {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

// Define-se um tamanho padrão
export function Text({ size = 'md', children }: TextProps) {
    return (

        // O clsx é aplicado aqui, usando classes de forma condicional
        <span className={clsx(
            "text-gray-100 font-sans",
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            }
        )}>
            {children}
        </span>
    );
}