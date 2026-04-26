import Image from "next/image";
import Logo from '@/assets/logo_zbank.png'

export const Footer = () => {
    return (
        <footer className="bg-[#000000] text-[#FFFFFF] ">
            <div className="container mx-auto items-center self-center justify-center flex p-4">
                      <Image src={Logo} alt="Logo Zbank"  />
            </div>
        </footer>
    );
};