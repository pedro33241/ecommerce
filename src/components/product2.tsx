import Image from "next/image";
import Link from 'next/link'; 
import { kitchenProduct } from "./mook/kitchenProduct"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useStore } from "@/hook/useZustand";
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
        
        const handleAddToCart = (product:any) => {
            addData(product)
         
        }
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
                    <div className="lg:ml-10 sm:ml-0  flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                                   {kitchenProduct?.map((item: ProductType) => (
                                       <Card key={item.id} className="group overflow-hidden border-border  transition-all hover:shadow-lg">
                                                                   <div className="relative overflow-hidden  h-48 w-full flex items-center justify-center">
                                                                       <Image
                                                                           alt={item.alt}
                                                                           src={item.srcImage}
                                                                           width={250}
                                                                           height={180}
                                                                           className="max-h-full max-w-full object-contain"
                                                                       />
                                                                   </div>
                                                                   <CardContent className="p-6">
                                                                       <div className="mb-2 flex items-start justify-between gap-2">
                                                                           <h3 className=" text-xl leading-tight text-foreground">
                                                                               {item.nameProduct}
                                                                           </h3>
                                                                           <Button
                                                                               size="icon"
                                                                               variant="outline"
                                                                               onClick={() => handleAddToCart(item)}
                                                                               className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                                                                           >
                                                                               <Plus className="h-4 w-4" />
                                                                           </Button>
                                                                       </div>
                                                                       <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                                                           {item.details}
                                                                       </p>
                                                                   </CardContent>
                                                               </Card>

                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}
