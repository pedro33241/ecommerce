"use client"


import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { AccountMenu } from "../sidbar/side";
import style from "./navBar.module.css"

export function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
const handleClick = ()=>{
    setIsVisible(false)
}
    const phone = 936884337;
const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    return(
      <>
      <div className=" h-[80px] w-full bg-[#fff] flex m-0 justify-between">
          <div className="">
              <Link href="/">
                  <Image
                      src="/logo2.jpeg"
                      alt="logo"
                      width={152}
                      height={62}
                      className="-mt-7"
                  />
              </Link>
          </div>

          <div className="h:flex absolute right-1 mf:hidden mt-4 float-right focus:outline-none">
              <AccountMenu />
          </div>

         <div className={`  ${style.container} mt-2 `}>
                    
              <div className="flex  flex-row gap-3 mr-5">
                               
             
              <Link href="/" className="m-3 text-black ">Home</Link>
              <Link href="/product" className="m-3 text- ">Produtos</Link>
              
                
              
                    
              </div>
          </div>
      </div>

      {isVisible && (
          <div className=" w-full bg-[#191c1f] relative">
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