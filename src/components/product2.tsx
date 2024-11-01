import Image from "next/image"
import style from "./style.module.css"

import Link from 'next/link';

export function Product2(){
    return(
        <>

 <div className={`${style.container} flex  md:ml-12  md:gap-3   mt-48`}>

 <div className={`flex flex-col justify-center mx-auto h:mb-24  `}>

<div className="bg-[#f3de6d] w-[312px] h-[288px] pt-3">
    <div className="text-center flex flex-col justify-center ">
        
<h1 className="text-[#be4646] font-semibold text-[14px] mx-auto mt-3 text-center ">Escritório e Escolar</h1>

<h3 className="font-semibold text-[32px] text-center "> 32% Desconto</h3>

<h5 className="text-[#475156] font-normal text-[16px]">Para todos os matérias de <br/> Escritório e Escolar</h5>
<br/>

<label className="font-medium text-[14px] flex flex-row gap-3 text-center justify-center ">Ofertas terminam em: <span className="-mt-2.5 bg-white rounded-sm text-black  font-semibold text-[14px] py-3 px-3 ">Fim do Natal</span></label>
<br/>
<Link href="" className="rounded-[4px]  bg-[#2591d2] py-[12px] px-[32px] text-white w-[80%]  mx-auto   justify-center flex flex-row gap-3 " > Comprar&nbsp;agora 
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.625 10h13.75M11.75 4.375 17.375 10l-5.625 5.625" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</Link>
</div>


</div>


<Image
alt="imagem de publicidade"
src="set2.svg"
width={312}
height={428}/>

</div>





<div className="ml-16 w-[75%]">
           <div className="flex flex-row justify-between">  
               <h1 className="font-semibold text-[22px] text-black">Categorias De Produtos</h1>
            <Link href="" className="text-[#1a73e8] font-medium text-[14px] flex flex-row gap-3">Ver mais     
            <Image 
                      alt="star"
                      src="setBlue.svg"
                      width={24}
                      className="-mt-2"
                      height={24}
                      />  </Link>
           </div>
          

                <div className="tab-content mb-12 ">
                          <div className="flex flex-wrap   gap-10 mt-12">
                          <div className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3  pr-2">
                                <Image 
                      alt="produto"
                      src="ferramenta.svg"
                      width={250}
                      className="mx-auto"
                      height={180}
                      
                      />
                                                  
                            <div className="ml-[18px] flex flex-col gap-4">
                                <Image 
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold text-[16px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3]" > Detalhe do Produto</Link>
                            </div>
                            </div>


                     
 
                            <div className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3  pr-2">
                                <Image 
                      alt="produto"
                      src="ferramenta.svg"
                      width={250}
                      className="mx-auto"
                      height={180}
                      
                      />
                                                  
                            <div className="ml-[18px] flex flex-col gap-4">
                                <Image 
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold text-[16px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3]" > Detalhe do Produto</Link>
                            </div>
                            </div>

                            <div className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3  pr-2">
                                <Image 
                      alt="produto"
                      src="ferramenta.svg"
                      width={250}
                      className="mx-auto"
                      height={180}
                      
                      />
                                                  
                            <div className="ml-[18px] flex flex-col gap-4">
                                <Image 
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold text-[16px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3]" > Detalhe do Produto</Link>
                            </div>
                            </div>

                            <div className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3  pr-2">
                                <Image 
                      alt="produto"
                      src="ferramenta.svg"
                      width={250}
                      className="mx-auto"
                      height={180}
                      
                      />
                                                  
                            <div className="ml-[18px] flex flex-col gap-4">
                                <Image 
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold text-[16px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3]" > Detalhe do Produto</Link>
                            </div>
                            </div>

                            <div className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3  pr-2">
                                <Image 
                      alt="produto"
                      src="ferramenta.svg"
                      width={250}
                      className="mx-auto"
                      height={180}
                      
                      />
                                                  
                            <div className="ml-[18px] flex flex-col gap-4">
                                <Image 
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold text-[16px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3]" > Detalhe do Produto</Link>
                            </div>
                            </div>


                            
                            </div>
                            </div>
               

               
                            </div>
                            </div>
               
                  
         

 
        </>
    )
}