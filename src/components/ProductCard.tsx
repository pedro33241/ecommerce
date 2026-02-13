"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useStore } from "@/hook/useZustand";
import { useState } from "react";

type ProductCardProps = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price?: number;
};

export function ProductCard({ id, nameProduct, details, srcImage, alt, price }: ProductCardProps) {
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const { addData } = useStore();
    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        addData({
            id,
            nameProduct,
            details,
            srcImage,
            alt,
            price: price || 0,
            quantity
        });
        setQuantity(1);
    };

    return (
        <>
            <Card className="group overflow-hidden border-border transition-all hover:shadow-lg">
                <div className="">
                    <button
                        onClick={() => setShowModal(true)}
                        className="block w-full h-full p-0 m-0 bg-transparent border-0"
                        aria-label={`Ver imagem de ${nameProduct}`}
                    >
                        <Image
                            alt={alt}
                            src={srcImage}
                            width={180}
                            height={160}
                            className="max-h-full max-w-full object-contain block m-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                </div>
                <CardContent className="p-4">
                <h3 className="font-serif text-[12px] leading-tight text-foreground mb-2">
                    {nameProduct}
                </h3>
                <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground">
                    {details}
                </p>

                {/* Status */}
                <div className="mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[11px] text-gray-600">
                        Sobre consulta
                    </span>
                </div>

                {/* Quantity Controls and Cart Button */}
                <div className="flex flex-col md:flex-row items-center gap-1 w-full">
                    <div className="flex items-center gap-0.5 border border-gray-300 rounded-lg p-1 flex-shrink-0">
                        <button
                            onClick={handleDecrement}
                            className="p-1 hover:bg-gray-100 rounded"
                            disabled={quantity === 1}
                        >
                            <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-medium">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="p-1 hover:bg-gray-100 rounded"
                        >
                            <Plus className="h-3 w-3" />
                        </button>
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        className="w-full md:flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs py-1.5 px-2 flex items-center justify-center gap-1 truncate"
                    >
                        <ShoppingCart className="h-3 w-3 flex-shrink-0" />
                        <span className="inline text-xs">Adicionar</span>
                    </Button>
                </div>
                </CardContent>
            </Card>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowModal(false)}>
                    <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-2 z-50 text-white bg-black/40 rounded-full p-2"
                            onClick={() => setShowModal(false)}
                            aria-label="Fechar imagem"
                        >
                            ✕
                        </button>
                        <Image
                            alt={alt}
                            src={srcImage}
                            width={900}
                            height={900}
                            className="object-contain max-h-[90vh] max-w-[90vw]"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
