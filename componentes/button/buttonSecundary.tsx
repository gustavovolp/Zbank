import { ReactNode } from "react";


interface ListBtnSecundary {
    children: ReactNode | string;
    onClick: () => void;
}

export function BtnSecundary({ children, onClick }: ListBtnSecundary) {
    return(
        <button onClick={ onClick}
        className="bg-neutral-500 hover:bg-neutral-600 rounded-lg text-white px-8 py-2 font-medium font-orbitron cursor-pointer"
        >
            {children}
        </button>
    )
}