"use client"


import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { AccountMenu } from "../sidbar/side";
import style from "./navBar.module.css"
import { CartDrawer } from "@/components/cart";
import { usePathname } from "next/navigation";

export function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
const handleClick = ()=>{
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
    }]
    
    console.log(pathName)
    return (
      <>
      <div className="shadow fixed z-50 h-[95px] w-full bg-[#fff] flex m-0 justify-between">
          <div className="">
              <Link href="/">
                  <Image
                      src="/logo2.jpeg"
                      alt="logo"
                      width={132}
                      height={62}
                      className="-mt-7"
                  />
              </Link>
          </div>

          <div className="flex absolute gap-4  items-center right-6 mf:hidden mt-4 float-right focus:outline-none">
                    <AccountMenu />
                    <CartDrawer />

          </div>

         <div className={`  ${style.container} mt-4 `}>
                    
              <div className="flex items-center  mt-3 flex-row gap-4 mr-5">
                               
             {itensMenu.map((item, index) => (
                <div key={index} >
                    <Link href={item.link} className={`mf:text-[16px] sx:text-sm font-medium  ${pathName === item.link ? "text-black border-b rounded-sm pb-1 border-yellow-400" : "text-gray-800 hover:text-black "} `}>
                        {item.name}
                    </Link>
                </div>
             ))}
              
                        <CartDrawer />
                    
              </div>
          </div>
      </div>

      {isVisible && (
          <div className="absolute  mt-24  w-full bg-[#191c1f] z-30">
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
  </>
    )
}