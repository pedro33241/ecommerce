"use client"



import Image from "next/image"
import Link from "next/link"
import { useState } from "react"; 
import { CartDrawer } from "@/components/cart";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
        setIsVisible(false)
    }
    const phone = 936884337;
    const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    const pathName = usePathname();

    const itensMenu = [{
        name: "Home",
        link: "/"
    }, {
        name: "Produtos",
        link: "/product"
    }, {
        name: "Sobre Nós",
        link: "/about"
    }]

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className=" mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
                <Link href="/" className="h-[20px]">
                    <Image
                        src="/logo2.png"
                        alt="logo"
                        width={132}
                        height={62}
                        className="-mt-12"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
               
                    {itensMenu.map((item, index) => (
                        <div key={index} >
                            <Link href={item.link} className={`text-gray-600 hover:text-black   transition-colors  ${pathName === item.link ? "text-black text-bold border-b rounded-sm pb-1 border-yellow-400" : "text-gray-900 hover:text-black "} `}>
                                {item.name}
                            </Link>
                        </div>
                    ))}
                     <CartDrawer />
                </nav>
                <div className="md:hidden flex items-center gap-8">

                    <button onClick={() => setIsOpen(!isOpen)} className=" w-10 rounded-full p-2  hover:bg-gray-200 h-10 flex flex-col justify-center gap-1">
                        <span className="w-full h-0.5 bg-gray-700"></span>
                        <span className="w-full h-0.5 bg-gray-700"></span>
                        <span className="w-full h-0.5 bg-gray-700"></span>
                    </button>

                    <CartDrawer />
</div>

                {isOpen && (
                    <nav className="shadow absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden flex flex-col gap-4 p-6">
                        <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                            Home
                        </Link>
                        <Link href="/product" className="text-gray-600 hover:text-black transition-colors">
                            Produtos
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                            Sobre Nós
                        </Link>

                    </nav>
                )}


                
            </div>


            {isVisible && (
                <div className="  w-full bg-[#191c1f] z-50  relative">
                    <div className="w-[80%] mx-auto bg-[#191c1f] md:flex-row sx:flex-col flex justify-between">
                        <div className={`mf:ml-24 md:ml-2 mt-4 flex flex-row  `}>
                            <label
                                className="bg-[#f3de6d] w-[74px] h-[40px] px-[18px] pt-[8px] font-semibold"
                                style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}
                            >
                                Black
                            </label>
                            <label className="font-semibold mf:text-2xl  ml-4 text-white">Friday</label>
                        </div>
                        <div className="flex ">
                            <span className="mf:text-[14px] sx:text-sm text-white font-medium mt-8 mr-3">Até</span>
                            <span className="mt-7 text-[#ebc80c] font-semibold md:text-3xl mf:text-[40px]">59%</span>
                            <span className="mf:text-[14px] sx:text-sm text-white font-medium mt-8 ml-3">de Desconto</span>
                        </div>
                        <div>
                            <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className="outline-none flex mt-4 mb-3 gap-1 mr-10 bg-[#ebc80c] pl-7 rounded-[2px] w-[194px] h-[48px]">
                                <span className="font-bold sx:text-xs md:text-[14px] text-[#191c1f] sx:mt-4 md:mt-4">COMPRE AGORA</span>
                                <Image
                                    src="/set.svg"
                                    alt="seta"
                                    width={20}
                                    height={20}
                                    className="m-3"
                                />
                            </Link>
                        </div>
                    </div>

                    <button onClick={handleClick} className="outline-none w-[32px] h-[32px] bg-[#303639] top-5 rounded-[2px] absolute right-6">
                        <Image
                            src="/X.svg"
                            alt="closed"
                            width={16}
                            height={16}
                            className="ml-2"
                        />
                    </button>
                </div>
            )}
        </header>
    )
}
