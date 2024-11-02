
import { NavBar } from "@/components/layouts/navBar/navBar";
import "./globals.css"
import {Product} from "../components/product";

import {Product2} from "../components/product2";

import {Publicity} from "../components/publicity";
import Image from "next/image"
export default function Home() {
  return (
   <>
  <NavBar/>
  <div className="cover">     
     <div className="back">
        <div className="back2">
          <h1 className=" text-white font-bold xl:text-6xl  mf:text-4xl text-2xl">
            Faça suas compras na D2 Dinâmico e <br/>
            receba seu pedido em questão de minutos!
          </h1>
        <div className=" text-white mf:text-lg xl:text-xl font-normal md:base">
          Aproveite ao máximo cada segundo! Com nossa entrega em apenas 15 minutos, você não perderá nenhum momento!
          </div>
        </div>
      </div>
    </div>


    <div className="p-7 justify-center mx-auto flex flex-wrap gap-24 mt-2 border border-[#e4e7e9]">
   
   
    <aside className="flex flex-row gap-4 md:border-r md:pr-24">
     
     <Image
     src="/entrega.svg"
     width={40}
     height={40}
     className="-mt-4"
     alt="imagem de entrega"
     />

      <div className="flex flex-col gap-2"><h1 className="font-medium text-[14px]">ENTREGA MAIS RÁPIDA</h1>
      <span className="font-normal text-[14px]">Entrega em 24/H</span>
      </div>
    </aside>

    <aside className="flex flex-row gap-4 md:border-r md:pr-24">
     
     <Image
     src="/trop.svg"
     width={40}
     
     className="-mt-4"
     height={40}
     alt="imagem de entrega"
     />

      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-[14px]">RETORNO EM 24 HORAS</h1>
      <span className="font-normal text-[14px]">Garantia de devolução de <br/> 100% do dinheiro</span>
      </div>
    </aside>
    <aside className="flex flex-row gap-4 md:border-r md:pr-24">
     
     <Image
     src="/pagamento.svg"
     width={40}
     height={40}
     className="-mt-4"
     alt="imagem de entrega"
     />

      <div className="flex flex-col gap-2"><h1 className="font-medium text-[14px]">PAGAMENTO SEGURO</h1>
      <span className="font-normal text-[14px]">Seu dinheiro está seguro</span>
      </div>
    </aside>

    <aside className="flex flex-row gap-4 ">
     
     <Image
     src="/music.svg"
     width={40}
     height={40}
     className="-mt-4"
     alt="imagem de entrega"
     />

      <div className="flex flex-col gap-2"><h1 className="font-medium text-[14px]">SUPORTE DE 24 HORAS POR <br/> DIA, 7 DIAS POR SEMANA</h1>
      <span className="font-normal text-[14px]">Contato/mensagem ao vivo</span>
      </div>
    </aside>

 
    </div>

    <Product/>

    <Publicity/>
    

    <Product2/>
   </>
  );
}
