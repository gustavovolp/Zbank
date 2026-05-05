import { SelectHTMLAttributes, ReactNode } from "react"

interface Option  {
    value: string;
    label: string;
}

interface LabelSelectProps {
    children: ReactNode;
    selectprops: SelectHTMLAttributes<HTMLSelectElement>;
    options: Option[];
}

export function LabelSelect({ children, selectprops, options}: LabelSelectProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-left font-medium text-zinc-600 dark:text-zinc-300 ">
                {children}
            </label>
            <select  {...selectprops}
                className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-2 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
               {options.map(e => (
                <option key={e.value} value={e.value}> {e.label} </option>
               ))}
            </select>
        </div>
    )
}