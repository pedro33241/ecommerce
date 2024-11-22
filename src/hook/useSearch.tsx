 
import {  lightingProduct } from "@/components/mook/lightingProduct";
import { kitchenProduct } from "@/components/mook/kitchenProduct";
import { useZustand } from "@/context/zustand";
import { useState } from "react";
import { electricalProduct } from "@/components/mook/electricalProduct";
import { accessoryProducts } from "@/components/mook/accessoryProducts";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

export function UseSearch() {
    const [activeTab, setActiveTab] = useState<number>(0);


    const { openProductSecond, handleClickSecond } = useZustand();
    const [data, setData] = useState<string>('');
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        nameProduct: "",
        details: "",
        srcImage: "",
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

    const filterProduct = kitchenProduct.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );

    const filterProductLuz = lightingProduct.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );

    const filterElectricalProduct = electricalProduct.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );
    const filterAccessoryProducts = accessoryProducts.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );
    return { filterProductLuz,filterAccessoryProducts,filterElectricalProduct, filterProduct, handleChangeSearch, handleClickModal, handleTabChange, openProductSecond, product, activeTab }
}