import { InputHTMLAttributes, ReactNode } from "react"
import { ChangeEvent } from "react"

interface ListLabelForm {
    children: ReactNode;
    Inputprops: InputHTMLAttributes<HTMLInputElement>;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    value?: string | number;
}

export function LabelInputForm ({ children, Inputprops, onChange}: ListLabelForm ) {
    return (
        <div className="flex flex-col gap-1 mb-3">
            <label className="text-sm text-left font-medium text-primary ">
                {children}
            </label>
            <input 
    {...Inputprops} onChange={onChange}
    className={`border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
        Inputprops.type === 'number' 
            ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
            : '[&::-webkit-calendar-picker-indicator]:invert'
    }`}
/>
        </div>
    )
}