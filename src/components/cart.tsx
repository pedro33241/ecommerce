"use client"

import { ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/hook/useZustand"
import Image from "next/image"
import Link from "next/link"

export function CartDrawer() {
    const { data, removeData} = useStore();
    const phone = 936884337
  
    type FilteredItem = {
        nome: string;
    };

    const filterData: FilteredItem[] = data.map((item:any) => ({
        nome: item.nameProduct,
    }));

    const product = filterData?.map(item => item.nome).join(", ");
   return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className=" relative rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                    <ShoppingCart className="h-5 w-5" />
                    {data?.length > 0 && (
                        <Badge variant="destructive" className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-0 text-xs">
                           <span className="flex justify-center items-center ml-2">   {data?.length}</span>
                        </Badge>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle className="font-serif text-2xl">Seu Carrinho</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-6">
                    {data?.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                            <p className="text-muted-foreground">Seu carrinho está vazio</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                                {data?.map((item:any) => (
                                <div key={item.id} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-secondary">
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
                                                <h4 className="font-serif mt-4 text-base leading-tight text-foreground">{item.nameProduct}</h4>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                    onClick={() => removeData(item.id)}
                                                className="h-6 w-6 shrink-0 text-muted-foreground hover:text-destructive"
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                               
                                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {data?.length > 0 && (
                   <div className="border-t border-border pt-6 w-full">
                     <div className="mb-4 flex items-center justify-between">
                               <span className=" text-xl ">Total de Itens</span>
                               <span className=" text-2xl font-medium  ">{data?.length}</span>
                           </div>
                       <Link
                           className="block w-full bg-primary text-white rounded-md p-2.5 text-center hover:bg-primary/90"
                           href={`https://wa.me/${phone}?text=Olá! Estou interessado(a) no(s) produto(s) ${product}. Poderia me fornecer mais informações sobre ele, disponibilidade e características? Obrigado(a)!`}
                           target="_blank"
                       >
                           Solicitar
                       </Link>

                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
