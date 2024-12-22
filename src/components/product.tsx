"use client";
import Image from "next/image"; 
import { ModalProductFirst } from "./modal/productModalFirst";
import { UseSearch } from "@/hook/useSearch";  

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};


export function Product() {

    const objectMaterial = [
        {
            id: 1,
            name: "UTENSÍLIOS DE COZINHA",
            background: "#DEFADE",
            color: "#32cd32",
            description: "",
            image: "category.svg",
        },
        {
            id: 2,
            name: "ILUMINAÇÃO",
            background: "#FEFFC1",
            color: "#FFD700",
            description: "",
            image: "luz.svg",
        },
        {
            id: 3,
            name: "FERRAMENTAS ELÉTRICAS",
            background: "#FFF5C5",
            color: "#FFA500",
            description: "",
            image: "electric.svg",
        },
        {
            id: 4,
            name: "FERRAMENTAS MANUAIS",
            background: "#FFF5C5",
            color: "#FFA500",
            description: "",
            image: "electric.svg",
        }, {
            id: 5,
            name: "ACESSÓRIOS E CONSUMÍVEIS DE DESGASTE RÁPIDO",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "wrench.svg",
        }, {
            id: 6,
            name: "HIGIENE E SEGURANÇA",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "droplet.svg",
        }, {
            id: 7,
            name: "BATERIA",
            background: "#FFEAD3",
            color: "#FF4500",
            description: "",
            image: "setup.svg",
        }, {
            id: 8,
            name: "COLA E RESISTENTE",
            background: "#fffec1",
            color: "#ffd700",
            description: "",
            image: "luz.svg",
        }, {
            id: 9,
            name: "ADITIVO DE LIMPEZA",
            background: "#F3E9FE",
            color: "#8A2BE2",
            description: "",
            image: "backpack.svg",
        }
    ]

    const { filterProductLuz, filterProduct, filterManualProducts, filterResistanceProducts, filterCleaningProducts, filterBatteryProducts, filterHygieneSafetyProducts,handleChangeSearch, filterElectricalProduct, filterAccessoryProducts, handleClickModal, handleTabChange, openProductSecond, product, activeTab } = UseSearch();

    return (
        <>
            <div className="mt-36">
                <h1 className="font-semibold ml-10 lg:text-[22px] sm:text-[19px] text-black">Categorias De Produtos</h1>

                <div className="tabs mt-7 ml-10 flex flex-wrap gap-4 justify-between">
             
                    <div className="flex flex-wrap gap-5 w-full">
            
                        {objectMaterial.map((item) => (
                            <button
                                key={item.id}
                                className={` flex flex-row gap-4 pt-4 rounded-[15px] h-[60px] justify-center px-4 py-auto text-[14px] font-medium ${activeTab === item?.id ? "active" : ""}`}
                                style={{ background: `${item?.background}`, color:`${ item?.color}`}}
                                onClick={() => handleTabChange(item?.id)}
                            >
                                <Image
                                    alt="categoria"
                                    src={`${item?.image}`}
                                    width={24}
                                    height={24}
                                />
                                <span className="mt-1">{item?.name}</span>
                            </button>

                        ))}
                    </div>
                    


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
                {activeTab === 1 && (
                        <div>    <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Produtos de Cozinha</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterProduct.length > 0 ? filterProduct.map((item: ProductType) => (
                                    <button 
                                    key={item.id} 
                                    onClick={() => handleClickModal(item)} 
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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



                    {activeTab === 2 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Lâmpadas</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterProductLuz.length > 0 ? filterProductLuz.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px]  gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}


                    {activeTab === 3 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Ferramentas Elétricas</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterElectricalProduct.length > 0 ? filterElectricalProduct.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px]  gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}


                    {activeTab === 4 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Ferramentas Manuais</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterManualProducts.length > 0 ? filterManualProducts.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px]  gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 5 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Acessórios</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterAccessoryProducts.length > 0 ? filterAccessoryProducts.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 6 && ( 
                          <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Higiene e Segurança</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterHygieneSafetyProducts.length > 0 ? filterHygieneSafetyProducts.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 7 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Batéria</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterBatteryProducts.length > 0 ? filterBatteryProducts.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>

                    )}

                    {activeTab === 8 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Cola e Resistente</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterResistanceProducts.length > 0 ? filterResistanceProducts.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
                                    <ModalProductFirst product={product} />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 9 && (
                        <div>
                            <h2 className="ml-10 font-semibold lg:text-[24px] sm:text-[19px]">Melhores Produtos de Aditivo de Limpeza</h2>
                            <div className="lg:ml-10 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                                {filterCleaningProducts.length > 0 ? filterCleaningProducts.map((item: ProductType) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClickModal(item)}
                                        className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px] gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110"
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
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                        </svg>
                                        <span>Nenhum produto encontrado</span>
                                    </div>
                                )}

                                {openProductSecond && (
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
