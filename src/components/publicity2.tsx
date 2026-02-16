"use client"

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function PublicityProductSecond(){
    const phone = 933103913;
    const menssage = "Olá! Estou interessado(a) em dos produtos de sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!";
    
    const images = Array.from({ length: 25 }, (_, i) => `/health/${i + 1}.jpg`);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIndex((s) => (s + 1) % images.length), 2500);
        return () => clearInterval(t);
    }, [images.length]);

    const prev = () => setIndex((s) => (s - 1 + images.length) % images.length);
    const next = () => setIndex((s) => (s + 1) % images.length);
   
    return(
        <>
     <div className=" flex items-center justify-center  ">   
 <div className={`flex flex-col md:ml-12 `}>



         <div className={`flex flex-col justify-center mx-auto h:mb-24  `}>

<div className="bg-[#f3de6d] w-[312px] h-[288px] pt-3">
    <div className="text-center flex flex-col justify-center ">
        
<h2 className="text-[#be4646] font-semibold text-[14px] mx-auto mt-3 text-center ">Produtos</h2>

<h3 className="font-semibold text-[32px] text-center "> 5% Desconto</h3>

<h4 className="text-[#475156] font-normal text-[14px]">Para todos os seguidores das nossas redes sociais</h4>
<br/>

                                <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank"  className="rounded-[4px]  bg-[#2591d2] py-[12px] px-[32px] text-white w-[80%]  mx-auto   justify-center flex flex-row gap-3 " > Comprar&nbsp;agora 
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.625 10h13.75M11.75 4.375 17.375 10l-5.625 5.625" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</Link>
</div>


</div><div/></div>



<div className="relative w-full md:w-[312px] md:h-[428px] sm:w-[280px] sm:h-[380px] h-[320px] mx-auto overflow-hidden rounded-lg shadow-lg">
    <Image
        alt={`imagem de publicidade ${index + 1}`}
        src={images[index]}
        fill
        unoptimized={true}
        className="object-cover transition-opacity duration-700 ease-in-out"
        priority={index === 0}
    />

    <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm border border-white/40 hover:scale-110 z-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
    </button>
    <button onClick={next} aria-label="Próximo" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm border border-white/40 hover:scale-110 z-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
    </button>

    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-semibold z-10">
        {index + 1}/{images.length}
    </div>
</div>

</div>
</div>
        </>
    )
}