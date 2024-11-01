"use client";
import Image from "next/image"
import Link from 'next/link';
import { useState } from "react";

export function Product() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index:number) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="mt-36 ">
                <h1 className="font-semibold lg:ml-16  sm:ml-4 lg:text-[22px] sm:text-[19px] text-black">Categorias De Produtos</h1>

                <div className="tabs mt-7 lg:ml-16  sm:ml-4">
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
                   
                </div>

                <div className="tab-content mb-12 mt-10">
                    {activeTab === 0 && (
                        <div className="-ml-2"> 
                            <h2 className="font-semibold lg:text-[24px] sm:text-[19px] lg:ml-20  sm:ml-7">Melhores produtos</h2>
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
                                <Image      
                      alt="star"
                      src="star.svg"
                      width={80}
                      height={16}
                      />     
                         <h4 className="font-semibold lg:text-[16px] sm:text-[14px] "> Ferramenta</h4>
                            <Link href="" className="text-[#2da5f3] lg:sm:text-[16px] sm:sm:text-[14px]" > Detalhe do Produto</Link>
                            </div>
                            </div>

                                
 


                                
 
                      

            
                            
                            </div>
                            </div>
                    )}
                  
                </div>
            </div>

          
        </>
    );
}
