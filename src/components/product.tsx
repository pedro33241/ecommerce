"use client";
import Image from "next/image";
import { useState } from "react"; 
import { dataProduct } from "./mook/dataProduct";
import { useZustand } from "../context/zustand";
import { ModalProductFirst } from "./modal/productModalFirst";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

export function Product() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const { openProductSecond, handleClickSecond } = useZustand();
    const [data, setData] = useState<string>('');
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        nameProduct: "",
        details: "",
        srcImage:"",
        alt: "",
        price: 0,
    }); 

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    const handleClickModal = (item: ProductType) => {
        setProduct(item);
        handleClickSecond(true); 
    };

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setData(value);
    };

    const filterProduct = dataProduct.filter(item => 
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );

    return (
        <>
            <div className="mt-36">
                <h1 className="font-semibold ml-10 lg:text-[22px] sm:text-[19px] text-black">Categorias De Produtos</h1>

                <div className="tabs mt-7 ml-10 flex flex-wrap gap-4 justify-between">
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
                        <span className="mt-1">Utensílios de cozinha</span>
                    </button>
                    
                    <div className="flex border-gray-400 border h-[48px] w-[330px] mr-4 rounded-lg bg-white flex-row gap-1">
                        <input 
                            type="text" 
                            placeholder="Pesquisar Produto..." 
                            onChange={handleChangeSearch} 
                            className="w-full pl-3 outline-none rounded-sm" 
                        />
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
                        <div> 
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores produtos</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterProduct.length > 0 ? filterProduct.map((item: ProductType) => (
                                    <button 
                                    key={item.id} 
                                    onClick={() => handleClickModal(item)} 
                                    className="card border-[#e4e7e9] w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2"
                                >
                                    <Image 
                                        alt={item.alt}
                                        src={item.srcImage}
                                        width={250}
                                        height={180} 
                                        className="mx-auto h-[180px] w-[250px] object-cover" 
                                    />
                                    
                                    <div className="ml-[18px] flex flex-col gap-1"> 
                                        <Image 
                                            alt="star"
                                            src="star.svg"
                                            width={80}
                                            height={16}
                                            className="mb-1"
                                        />     
                                        <h4 className="font-semibold text-[16px] text-left">{item.nameProduct}</h4>
                                        <span className="text-[#2da5f3] text-left">Detalhe do Produto</span> 
                                    </div>
                                </button>
                                
                                )) : (
                                    <div className="mx-auto gap-3 flex flex-col justify-center items-center text-gray-400 text-xl h-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond  && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
