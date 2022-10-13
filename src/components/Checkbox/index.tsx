import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export type CheckboxProps = {}

// Define-se um tamanho padrão
export function Checkbox({ }: CheckboxProps) {

    return (

        // Lembrando que o asChild funciona como um Slot
        // Na estilização com o tailwind, lembrar que as medidas são em rem (py-1 = 0,25rem = 4px)
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}