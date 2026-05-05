import Image from "next/image";
import Logo from '@/lib/logo_zbank.png'

export const Footer = () => {
    return (
        <footer className="bg-[#000000] text-[#FFFFFF] ">
            <div className="container mx-auto items-center self-center justify-center flex gap-6 p-4">
                      <Image src={Logo} alt="Logo Zbank"  /> 
                      Desenvolvido por Gustavo A. Volpato
            </div>
        </footer>
    );
};