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
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 3.00195L15.0606 6.44129C14.4748 7.02708 14.4748 7.97683 15.0606 8.56261L15.75 9.25195M15.75 9.25195L16.4393 9.94129C17.0251 10.5271 17.9748 10.5271 18.5606 9.94129L22 6.50195M15.75 9.25195L4 21.002" stroke="#32CD32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 4.99902L17.5 7.49902" stroke="#32CD32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.98914 8.99011C6.79472 10.1845 5.15674 10.4831 3.66377 8.99011C2.17075 7.49709 1.38801 4.77783 2.58243 3.58341C3.77685 2.38899 6.49611 3.17172 7.98914 4.66475C9.48211 6.15772 9.18356 7.79569 7.98914 8.99011ZM7.98914 8.99011L20 21.001" stroke="#32CD32" stroke-width="1.5" stroke-linecap="round" />
                <path d="M9.20542 2.39669C10.0923 2.13908 11.03 2.00098 12 2.00098C13.1517 2.00098 14.2579 2.19567 15.2876 2.55394M2.04937 11.001C2.01672 11.3299 2 11.6635 2 12.001C2 14.0328 2.60598 15.9231 3.64707 17.501M7.77267 21.0661C9.05671 21.6659 10.4892 22.001 12 22.001C13.5244 22.001 14.9691 21.6599 16.262 21.0499M20.3529 17.501C21.394 15.9231 22 14.0328 22 12.001C22 11.4228 21.9509 10.8561 21.8567 10.3048" stroke="#32CD32" stroke-width="1.5" stroke-linecap="round" />
            </svg>

        },
        {
            id: 2,
            name: "ILUMINAÇÃO",
            background: "#FEFFC1",
            color: "#FFD700",
            description: "",
            image: "luz.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.08938 14.999C5.71097 14.1484 5.5 13.2021 5.5 12.2049C5.5 8.50135 8.41015 5.49902 12 5.49902C15.5899 5.49902 18.5 8.50135 18.5 12.2049C18.5 13.2021 18.289 14.1484 17.9106 14.999" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" />
                <path d="M12 1.99902V2.99902" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 11.999H21" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 11.999H2" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.0704 4.92773L18.3633 5.63484" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.6368 5.63582L4.92969 4.92871" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.517 19.3055C15.5274 18.9786 15.9326 18.0538 16.0466 17.1236C16.0806 16.8458 15.852 16.6152 15.572 16.6152L8.47686 16.6154C8.18726 16.6155 7.95468 16.8612 7.98926 17.1488C8.10091 18.0771 8.38271 18.7553 9.45346 19.3055M14.517 19.3055C14.517 19.3055 9.62972 19.3055 9.45346 19.3055M14.517 19.3055C14.3955 21.2505 13.8338 22.0207 12.0068 21.9991C10.0526 22.0352 9.60304 21.0831 9.45346 19.3055" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        },
        {
            id: 3,
            name: "FERRAMENTAS ELÉTRICAS",
            background: "#FFF5C5",
            color: "#FFA500",
            description: "",
            image: "electric.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2V5" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 2V5" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 18V22" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.6939 8.5L10.6029 10.6749C10.3788 10.9079 10.5394 11.2433 10.9048 11.3053L13.0952 11.6773C13.4848 11.7434 13.6334 12.1147 13.361 12.3413L10.7666 14.5" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3066 5H9.69342C7.5551 5 6.48594 5 5.89527 5.69774C5.3046 6.39548 5.46717 7.46639 5.79232 9.60823L6.31604 13.0581C6.83606 16.4836 8.28588 18 12 18C15.7141 18 17.1639 16.4836 17.684 13.0581L18.2077 9.60823C18.5328 7.46639 18.6954 6.39548 18.1047 5.69774C17.5141 5 16.4449 5 14.3066 5Z" stroke="#FFA500" stroke-width="1.5" />
            </svg>

        },
        {
            id: 4,
            name: "FERRAMENTAS MANUAIS",
            background: "#FFF5C5",
            color: "#FFA500",
            description: "",
            image: "wrench.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z" stroke="#FFA500" stroke-width="1.5" />
                <path d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5" stroke="#FFA500" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5.50896 18.5H5.5" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        }, {
            id: 5,
            name: "ACESSÓRIOS E CONSUMÍVEIS DE DESGASTE RÁPIDO",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "recycle.svg",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-recycle" viewBox="0 0 16 16">
                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
            </svg>
        }, {
            id: 6,
            name: "HIGIENE E SEGURANÇA",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "droplet.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="#1E90FF" stroke-width="1.5" />
                <path d="M16 14C16 16.2091 14.2091 18 12 18" stroke="#1E90FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        }, {
            id: 7,
            name: "BATERIA",
            background: "#FFEAD3",
            color: "#FF4500",
            description: "",
            image: "setup.svg",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-battery" viewBox="0 0 16 16">
                <path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8" />
            </svg>

        }, {
            id: 8,
            name: "COLA E RESISTENTE",
            background: "#fffec1",
            color: "#ffd700",
            description: "",
            image: "luz.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="#ffd700" stroke-width="1.5" />
                <path d="M16 14C16 16.2091 14.2091 18 12 18" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        }, {
            id: 9,
            name: "ADITIVO DE LIMPEZA",
            background: "#F3E9FE",
            color: "#8A2BE2",
            description: "",
            image: "backpack.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 14H20.2389C21.3498 14 22.1831 15.0805 21.9652 16.2386L21.7003 17.6466C21.4429 19.015 20.3127 20 19 20" stroke="#8A2BE2" stroke-width="1.5" />
                <path d="M5 14H3.76113C2.65015 14 1.81691 15.0805 2.03479 16.2386L2.29967 17.6466C2.55711 19.015 3.68731 20 5 20" stroke="#8A2BE2" stroke-width="1.5" />
                <path d="M18.2696 10.5001L18.7911 15.1968C19.071 18.3791 19.211 19.9702 18.2696 20.9851C17.3283 22.0001 15.7125 22.0001 12.481 22.0001H11.519C8.2875 22.0001 6.67174 22.0001 5.73038 20.9851C4.78901 19.9702 4.92899 18.3791 5.20893 15.1968L5.73038 10.5" stroke="#8A2BE2" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5" stroke="#8A2BE2" stroke-width="1.5" />
                <path d="M5.2617 8.86971C5.01152 7.45403 4.88643 6.74619 5.13559 6.20431C5.30195 5.84248 5.57803 5.53512 5.9291 5.32087C6.45489 5 7.21577 5 8.73753 5H15.2625C16.7842 5 17.5451 5 18.0709 5.32087C18.422 5.53512 18.698 5.84248 18.8644 6.20431C19.1136 6.74619 18.9885 7.45403 18.7383 8.86971L18.6872 9.15901C18.5902 9.70796 18.5417 9.98243 18.446 10.2349C18.2806 10.671 18.0104 11.0651 17.6565 11.3863C17.4517 11.5722 17.2062 11.7266 16.7153 12.0353C16.2537 12.3255 16.0229 12.4706 15.779 12.5845C15.3579 12.7812 14.905 12.9105 14.439 12.9672C14.169 13 13.8916 13 13.3369 13H10.6631C10.1084 13 9.831 13 9.56102 12.9672C9.09497 12.9105 8.64214 12.7812 8.22104 12.5845C7.9771 12.4706 7.74632 12.3255 7.28474 12.0353C6.79376 11.7266 6.54827 11.5722 6.34346 11.3863C5.98959 11.0651 5.7194 10.671 5.55404 10.2349C5.45833 9.98243 5.40983 9.70796 5.31282 9.15901L5.2617 8.86971Z" stroke="#8A2BE2" stroke-width="1.5" />
                <path d="M12 10.0024L12.0087 10.0001" stroke="#8A2BE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

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
                              {item.svg}
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
