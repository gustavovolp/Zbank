import { SelectHTMLAttributes, ReactNode } from "react"
import { ChangeEvent } from "react"

interface Option  {
    value: string;
    label: string;
}

interface LabelSelectFormProps {
    children: ReactNode;
    selectprops: SelectHTMLAttributes<HTMLSelectElement>;
    options: Option[];
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function LabelSelectForm ({ children, selectprops, options, onChange}: LabelSelectFormProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm text-left font-medium text-primary ">
                {children}
            </label>
            <select  {...selectprops} onChange={ onChange }
                className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
               {options.map(e => (
                <option key={e.value} value={e.value}> {e.label} </option>
               ))}
            </select>
        </div>
    )
}