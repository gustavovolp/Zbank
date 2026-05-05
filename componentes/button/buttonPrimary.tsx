import { ReactNode } from "react";


interface ListBtnPrimary {
    children: ReactNode | string;
    onClick?: () => void;
    href?: 'string'
}

export function BtnPrimary({ children, onClick}: ListBtnPrimary) {
    return(
        <button onClick={ onClick }
        className="bg-secondary hover:bg-primary rounded-lg  text-white px-8 py-2 font-medium font-orbitron cursor-pointer"
        >
            {children}
        </button>
    )
}