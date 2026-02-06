"use client"

import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/hook/useZustand"
import Image from "next/image"

export function CartDrawer() {
    const { data, removeData, incrementQuantity, decrementQuantity } = useStore();
    const whatsappPhone = "933103913"; // número usado no projeto
    const emailTo = "dbsd.angola@gmail.com";

    type ProductType = {
        id: number;
        nameProduct: string;
        details: string;
        srcImage: string;
        alt: string;
        price: number;
        quantity?: number;
    };

    const buildMessage = () => {
        if (!data || data.length === 0) return "";
        const lines: string[] = [];
        lines.push("Olá! Gostaria de comprar os seguintes produtos:");
        lines.push("");
       

        data.forEach((item: ProductType, idx: number) => {
            const qty = item.quantity || 1; 
            lines.push(`${idx + 1}. ${item.nameProduct} (x${qty})`);
        });
        lines.push("");
        lines.push(`Total de itens: ${data.reduce((s: number, it: ProductType) => s + (it.quantity||1), 0)}`);
        lines.push("");
        lines.push("Por favor, confirme disponibilidade e formas de pagamento.");
        return lines.join("\n");
    };

    const handleWhatsApp = () => {
        const msg = encodeURIComponent(buildMessage());
        const url = `https://wa.me/${whatsappPhone}?text=${msg}`;
        window.open(url, "_blank");
    };

    const handleEmail = () => {
        const message = buildMessage();
        if (!message) {
            alert("Seu carrinho está vazio. Adicione produtos antes de enviar o pedido.");
            return;
        }
        
        const subject = "Pedido de Compra - Loja";
        const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        
        window.open(gmailLink, "_blank");
    };

    // Calcular total de itens considerando quantidade
    const totalItems = data.reduce((sum: number, item: ProductType) => sum + (item.quantity || 1), 0);

  
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className=" relative rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                        <Badge variant="destructive" className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-0 text-xs">
                            <span className="flex justify-center items-center ml-2">{totalItems}</span>
                        </Badge>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-lg bg-white">
                <SheetHeader className="border-b border-gray-200 pb-4">
                    <SheetTitle className="font-serif text-3xl text-gray-900">🛒 Seu Carrinho</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-6">
                    {data?.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                            <ShoppingCart className="h-16 w-16 text-muted-foreground opacity-50" />
                            <p className="text-muted-foreground text-lg">Seu carrinho está vazio</p>
                            <p className="text-sm text-muted-foreground">Adicione produtos para começar!</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {data?.map((item: ProductType) => (
                                <div key={item.id} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <Image
                                            alt={item.alt}
                                            src={item.srcImage}
                                            width={250}
                                            height={180}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h4 className="font-serif text-base font-semibold leading-tight text-gray-900">{item.nameProduct}</h4>
                                                <p className="text-xs text-gray-600 mt-1">{item.details}</p>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => removeData(item.id)}
                                                className="h-6 w-6 shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => decrementQuantity(item.id)}
                                                    className="h-7 w-7 text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="w-8 text-center text-sm font-semibold text-gray-900">{item.quantity || 1}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => incrementQuantity(item.id)}
                                                    className="h-7 w-7 text-gray-500 hover:text-gray-900 hover:bg-gray-200"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>
                                            {item.price && (
                                                <span className="text-xs md:text-sm text-gray-500">
                                                    SKU: {item.id}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {data?.length > 0 && (
                    <div className="border-t border-gray-200 pt-6 w-full space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-base font-medium text-gray-700">Total de Itens</span>
                                <span className="text-2xl font-bold text-blue-600">{totalItems}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <button
                                onClick={handleWhatsApp}
                                className="w-full bg-green-500 text-white rounded-lg p-3 text-center font-semibold hover:bg-green-600 transition-colors"
                            >
                                Enviar por WhatsApp
                            </button>
                            <button
                                onClick={handleEmail}
                                className="w-full bg-yellow-500 text-white rounded-lg p-3 text-center font-semibold hover:bg-yellow-600 transition-colors"
                            >
                                Enviar por Email
                            </button>
                        </div>

                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
