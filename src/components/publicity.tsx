"use client"

import Image from "next/image"
import style from "./style.module.css"
import Link from 'next/link';
import { useEffect, useState } from 'react';


export function Publicity() {
    const phone = 933103913;
    const menssage = "Olá! Estou interessado(a) em um dos produtos de sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!";

    return (
        <>

            <div className={`left-0 right-0 mx-auto w-[85%] md:w-[80%] flex justify-between py-4 px-6 bg-[#072a4a] mb-24 z-30 rounded-lg shadow-lg ${style.cont}`}>
                <div className="text-white flex flex-col gap-9">
                    <label htmlFor="" className="font-normal md:text-[18px] sm:text-[14px] md:w-[195px] sm:w-[165px] bg-[#2591d2] py-[6px] px-[12px] ">Economizar até 5%</label>
                    <div>
                        <h2 className="font-semibold md:text-[36px]  sm:text-[24px]">BEM-ESTAR & </h2>
                        <span className="w-[360px] md:text-[16px] sm:text-[14px]">Soluções integradas que acompanham o seu ritmo. Oferecemos uma linha selecionada de cuidados de higiene, estética e conveniência para o seu ambiente corporativo e para o conforto da sua família. Da energia do café à excelência nos cuidados diários, garantimos o suporte necessário para o seu dia a dia.
                        </span>
                    </div>

                    <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className="rounded-[4px]  bg-[#fa8232] py-[12px] px-[32px] text-white md:w-[206px] sm:w-[180px]  mb-12 sm:text-[14px] flex flex-row gap-3 " >
                        Compre&nbsp;agora
                        <Image
                            alt="seta para comprar"
                            src="/setD.svg"
                            width={24}
                            height={24}
                            loading="lazy"
                            unoptimized={true} />

                    </Link>
                </div>

                {/* Carousel using images from public/health (1.jpg .. 25.jpg) */}
                <HealthCarousel className={style.img} />
            </div>
        </>
    )
}

function HealthCarousel({ className }: { className?: string }) {
    const images = Array.from({ length: 25 }, (_, i) => `/health/${i + 1}.jpg`);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIndex((s) => (s + 1) % images.length), 2500);
        return () => clearInterval(t);
    }, [images.length]);

    const prev = () => setIndex((s) => (s - 1 + images.length) % images.length);
    const next = () => setIndex((s) => (s + 1) % images.length);

    return (
        <div className="relative w-full md:w-[1350px] md:h-[550px] sm:w-[500px] sm:h-[380px] h-[300px] overflow-visible rounded-lg shadow-xl">
            <Image
                alt={`imagem de bem-estar ${index + 1}`}
                src={images[index]}
                fill
                unoptimized={true}
                className={`${className ?? ''} w-full object-contain transition-opacity duration-700 ease-in-out`}
                priority={index === 0}
            />

            <button onClick={prev} aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/40 hover:scale-110 z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} aria-label="Próximo" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/40 hover:scale-110 z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold z-10">
                {index + 1}/{images.length}
            </div>
        </div>
    )
}