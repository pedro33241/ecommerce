"use client";
import Image from "next/image"
import Link from 'next/link';
import { useState } from "react";
import {DataProduct} from "./mook/dataProduct"
export function Product() {
    const [activeTab, setActiveTab] = useState(0);
const [data,setData] = usestate();
    const handleTabChange = (index:number) => {
        setActiveTab(index);
    };


const handleChangeSearch =(e:changeEvent)=>{
const {value} = e.target;
setData(value);
}


    return (
        <>
            <div className="mt-36  ml-16">
                <h1 className="font-semibold    lg:text-[22px] sm:text-[19px] text-black">Categorias De Produtos</h1>

                <div className="tabs mt-7  flex flex-wrap  gap-4 justify-between">
                    <button 
                        className={`bg-[#DEFADE] text-[#32cd32] flex flex-row gap-4 pt-4 rounded-[15px] w-[190px] h-[60px] justify-center px-auto py-auto text-[14px] font-medium ${activeTab === 0 ? "active" : ""}`}
                        onClick={() => handleTabChange(0)}
                    >
                      <Image 
                      alt="categoria"
                      src="category.svg"
                      width={24}
                      height={24}
                      />
                      <span className="mt-1">
                      Utensilios de cozinha </span>
                    </button>
                   
                    <div className="flex boder-gray-400 border h-[48px] w-[330px] mr-4 rounded-lg bg-white flex-row gap-1">
                      <input type="text" placeholder="Pesquisar Produto..." onchange={handleChangeSearch} className="w-full pl-3 outline-none rounded-sm" />
                      <Image
                          src="/search.svg"
                          alt="search"
                          width={20}
                          height={20}
                          className="m-3"
                      />
                      </div>
                </div>

                <div className="tab-content mb-12 mt-10">
                    {activeTab === 0 && (
                        <div className=""> 
                            <h2 className="font-semibold lg:text-[24px] sm:text-[19px]">Melhores produtos</h2>
                            <div className="lg:ml-20  sm:ml-0 flex flex-wrap sm:justify-center lg:justify-normal  gap-10 mt-24">
                               
 
                            <div className="card border-[#e4e7e9] lg:w-[317px] sm:w-[290px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3  pr-2">
                                <Image 
                      alt="produto"
                      src="ferramenta.svg"
                      width={250}
                      className="mx-auto"
                      height={180}
                      
                      />
                                                  
                            <div className="ml-[18px] flex flex-col gap-4">
                          {DataProduct?.map((item)=>(
                            <>
                                  <Image      
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold lg:text-[16px] sm:text-[14px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3] lg:sm:text-[16px] sm:sm:text-[14px]" > Detalhe do Produto</Link>
                            </div>
                            </>
                          ))}
                            </div>

                                
 


                                
 
                      

            
                            
                            </div>
                            </div>
                    )}
                  
                </div>
            </div>

          
        </>
    );
}
