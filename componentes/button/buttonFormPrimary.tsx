import { ReactNode } from "react";


interface ListBtnFormPrimary {
    children: ReactNode | string;
    type?: 'button' | 'submit' | 'reset';
}

export function BtnFormPrimary({ children, type = 'submit'}: ListBtnFormPrimary) {
    return(
        <button type={type}
        className="bg-secondary hover:bg-primary rounded-lg mt-3 text-white px-8 py-2 font-medium font-orbitron cursor-pointer"
        >
            {children}
        </button>
    )
}