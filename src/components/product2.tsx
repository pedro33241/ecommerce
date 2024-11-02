import Image from "next/image"

import { useState } from "react"; 
import Link from 'next/link';
import {dataProduct} from "./mook/dataProduct"
 import {useZustand} from "../context/zustand"
 import {ModalProduct} from "./modal/productInfo"

export function Product2(){

    const { open, handleClick } = useZustand();

      
    const [product, setProduct] = useState({})
    

  const handleClickModal = (item:any)=>{
        setProduct(item)
        handleClick(!open)
        } 

        console.log("teste")
    return(
        <>






<div >
           <div className="flex flex-row justify-between ">  
               <h1 className="ml-10 font-semibold text-[22px] text-black">Categorias De Produtos</h1>
            <Link href="/product" className="text-[#1a73e8] font-medium text-[14px] flex flex-row gap-3">Ver mais     
            <Image 
                      alt="star"
                      src="setBlue.svg"
                      width={24}
                      className="-mt-2"
                      height={24}
                      />  </Link>
           </div>
          

                <div className="tab-content mb-12 ">
                          <div className="lg:ml-20  sm:ml-0 flex flex-wrap justify-center  gap-10 mt-24">
                      
                 

                            {dataProduct?.map((item)=>(
                    <>
                    <button 
  onClick={() => handleClickModal(item)} 
  className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2"
>
  <img 
    alt={`${item.alt}`}
    src={`${item.srcImage}`}
    width={250}
    height={180}
    className="mx-auto h-[180px] w-[250px] object-cover" 
  />
  
  <div className="ml-[18px] flex flex-col gap-4">
    <Image 
      alt="star"
      src="star.svg"
      width={80}
      height={16}
    />     
    <h4 className="font-semibold text-[16px]">{item?.nameProduct}</h4>
    <span className="text-[#2da5f3]">Detalhe do Produto</span>
  </div>
</button>

                    </>
                ))}
                     
 
                           


                            
                            </div>
                            </div>
               
 
                            {open && (
                    <ModalProduct product={product}/>
                  )}

               
                            </div>
               
                  
         

 
        </>
    )
}