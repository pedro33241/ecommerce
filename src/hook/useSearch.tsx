 
import {  lightingProduct } from "@/components/mook/lightingProduct";
import { kitchenProduct } from "@/components/mook/kitchenProduct";
import { useZustand } from "@/context/zustand";
import { useState } from "react";
import { electricalProduct } from "@/components/mook/electricalProduct";
import { accessoryProducts } from "@/components/mook/accessoryProducts";
import { manualProducts } from "@/components/mook/manualProduct";
import { hygieneSafety } from "@/components/mook/hygieneSafety";
import { resistanceProduct } from "@/components/mook/resistanceProduct";
import { batteryProducts } from "@/components/mook/battery";
import { cleaningProducts } from "@/components/mook/cleaning";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

export function UseSearch() {
    const [activeTab, setActiveTab] = useState<number>(1);


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
    const filterManualProducts = manualProducts.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );
    const filterHygieneSafetyProducts = hygieneSafety.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );

    const filterResistanceProducts= resistanceProduct.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );

    const filterBatteryProducts = batteryProducts.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );
    const filterCleaningProducts = cleaningProducts.filter(item =>
        item.nameProduct.toLowerCase().includes(data.toLowerCase())
    );
    return { filterProductLuz, filterCleaningProducts, filterAccessoryProducts, filterBatteryProducts, filterResistanceProducts, filterElectricalProduct, filterHygieneSafetyProducts,filterManualProducts,filterProduct, handleChangeSearch, handleClickModal, handleTabChange, openProductSecond, product, activeTab }
}

