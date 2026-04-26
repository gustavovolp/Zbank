import Image from "next/image";
import Logo from '@/assets/logo_zbank.png'

export const Header = () => {
  return (
    <header className=" bg-(--color-secondary) text-[#FFFFFF] p-4 ">
      <div className="container flex items-center justify-between w-full mx-auto">
      <div>
      <h1 className="text-2xl font-bold font-orbitron">Olá, seja bem-vindo!</h1>
      <p className="text-[12px]">Gerencie suas finanças de forma fácil e rápida com o ZbanK.</p>
      </div>
      <div >
      <Image src={Logo} alt="Logo Zbank" />
      </div>
      </div>
    </header>
  );
};