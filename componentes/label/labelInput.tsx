import { InputHTMLAttributes, ReactNode } from "react"

interface ListLabel {
    children: ReactNode;
    Inputprops: InputHTMLAttributes<HTMLInputElement>;
}

export function LabelInput({ children, Inputprops}: ListLabel) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-left font-medium text-zinc-600 dark:text-zinc-300 ">
                {children}
            </label>
            <input 
                {...Inputprops}
                className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
        </div>
    )
}