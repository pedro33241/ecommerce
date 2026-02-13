import Image from "next/image";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, ShoppingCart } from "lucide-react"
import { useStore } from "@/hook/useZustand";
import { accessoryProducts } from "./mook/accessoryProducts";
import { useState } from "react";
type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

export function Product2() {
    const { addData } = useStore()
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [modalAlt, setModalAlt] = useState<string>("");

    const getQuantity = (id: number) => quantities[id] || 1;

    const handleIncrement = (id: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const handleDecrement = (id: number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) - 1)
        }));
    };

    const handleAddToCart = (product: ProductType) => {
        const quantity = getQuantity(product.id);
        addData({
            ...product,
            quantity
        });
        setQuantities(prev => ({
            ...prev,
            [product.id]: 1
        }));
    };
    return (
        <>
            <div className="w-full px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <h1 className="font-semibold text-[18px] sm:text-[22px] text-black">Categorias De Produtos</h1>
                    <Link href="/product" className="text-[#1a73e8] font-medium text-[12px] sm:text-[14px] flex flex-row gap-3 w-fit">
                        Ver&nbsp;mais
                        <Image alt="seta" src="/setBlue.svg" width={24} className="-mt-2" height={24} loading="lazy" unoptimized={true} />
                    </Link>
                </div>

                <div className="tab-content mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-12 sm:mt-24 px-2 sm:px-4 md:px-6 lg:px-10">
                        {accessoryProducts?.map((item: ProductType) => (
                            <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                    <button
                                        onClick={() => { setModalImage(item.srcImage); setModalAlt(item.alt); }}
                                        className=""
                                        aria-label={`Ver imagem de ${item.nameProduct}`}
                                    >
                                        <Image
                                            alt={item.alt}
                                            src={item.srcImage}
                                            width={250}
                                            height={180}
                                            className="max-h-full max-w-full object-contain  block m-auto"
                                        />
                                    </button>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="mb-2 text-[12px] leading-tight text-foreground">
                                        {item.nameProduct}
                                    </h3>
                                    <p className="mb-3 text-[12px] leading-relaxed text-muted-foreground">
                                        {item.details}
                                    </p>
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-[11px] text-gray-600">
                                            Sobre consulta
                                        </span>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-1 w-full">
                                        <div className="flex items-center gap-0.5 border border-gray-300 rounded-lg p-1 flex-shrink-0">
                                            <button
                                                onClick={() => handleDecrement(item.id)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                                disabled={getQuantity(item.id) === 1}
                                                aria-label="Diminuir quantidade"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="w-5 text-center text-xs font-medium">{getQuantity(item.id)}</span>
                                            <button
                                                onClick={() => handleIncrement(item.id)}
                                                className="p-1 hover:bg-gray-100 rounded"
                                                aria-label="Aumentar quantidade"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                        <Button
                                            onClick={() => handleAddToCart(item)}
                                            className="w-full md:flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs py-1.5 px-2 flex items-center justify-center gap-1 truncate"
                                            aria-label={`Adicionar ${item.nameProduct} ao carrinho`}
                                        >
                                            <ShoppingCart className="h-3 w-3 flex-shrink-0" />
                                            <span className="inline text-xs">Adicionar</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                </div>

            </div>
            {modalImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setModalImage(null)}>
                    <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 z-50 text-white bg-black/40 rounded-full p-2"
                            onClick={() => setModalImage(null)}
                            aria-label="Fechar imagem"
                        >
                            ✕
                        </button>
                        <Image
                            alt={modalAlt}
                            src={modalImage}
                            width={900}
                            height={900}
                            className="object-contain max-h-[90vh] max-w-[90vw] block m-auto"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
