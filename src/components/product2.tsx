import Image from "next/image";
import { useState } from "react";
import Link from 'next/link'; 
import { useZustand } from "../context/zustand";
import { ModalProduct } from "./modal/productInfo";
import { kitchenProduct } from "./mook/kitchenProduct";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

export function Product2() {
    const { openProductFirst, handleClickFirst } = useZustand();
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        nameProduct: "",
        details: "",
        srcImage: "",
        alt: "",
        price: 0,
    });

    const handleClickModal = (item: ProductType) => {
        setProduct(item);
        handleClickFirst(true);
    };

    return (
        <>
            <div>
                <div className="flex sx:flex-col md:flex-row justify-between">
                    <h1 className="ml-10 font-semibold text-[22px] text-black">Categorias De Produtos</h1>
                    <Link href="/product" className="sx:ml-10 text-[#1a73e8] font-medium text-[14px] flex flex-row gap-3">
                        Ver&nbsp;mais
                        <Image alt="seta" src="setBlue.svg" width={24} className="-mt-2" height={24} />
                    </Link>
                </div>

                <div className="tab-content mb-12">
                    <div className="lg:ml-20 sm:ml-0 flex flex-wrap justify-center gap-10 mt-24">
                        {kitchenProduct?.map((item: ProductType) => (
                            <button
                                key={item.id}
                                onClick={() => handleClickModal(item)}
                                className="card border-[#e4e7e9] sx:w-[250px] md:w-[317px]  gap-3 flex flex-col border pb-3 rounded-[8px] pt-3 pr-2  transition-transform duration-300 hover:scale-110 "

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

                        ))}
                    </div>
                </div>

                {openProductFirst && (
                    <ModalProduct product={product} />
                )}
            </div>
        </>
    );
}
