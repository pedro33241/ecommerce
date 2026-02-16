"use client"

import "./globals.css"
import dynamic from "next/dynamic";
import { Footer } from "../components/footer/footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

import { Publicity } from "../components/publicity"
import Image from "next/image"

import { motion, useInView } from "framer-motion";
import {  useRef } from "react";
import { Carousel } from "@/components/carousel";
import { slides } from "@/components/constants";
import NavBar from "@/components/layouts/navBar/navBar";
import { Partners } from "@/components/partners";

// Lazy load heavy components
const Product = dynamic(() => import("../components/product").then(mod => ({ default: mod.Product })), {
  loading: () => <div className="min-h-96 bg-white border border-gray-200 animate-pulse" />,
  ssr: true
});

const Product2 = dynamic(() => import("../components/product2").then(mod => ({ default: mod.Product2 })), {
  loading: () => <div className="min-h-96 bg-white border border-gray-200 animate-pulse" />,
  ssr: true
});

const DecorativeElements = dynamic(() => import("../components/DecorativeElements").then(mod => ({ default: mod.DecorativeElements })), {
  loading: () => null,
  ssr: false
});

const SplashAnimation = dynamic(() => import("../components/SplashAnimation").then(mod => ({ default: mod.SplashAnimation })), {
  loading: () => null,
  ssr: false
});

const PublicityProductSecond = dynamic(() => import("../components/publicity2").then(mod => ({ default: mod.PublicityProductSecond })), {
  loading: () => null,
  ssr: true
});
export default function Home() {



  const variant = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 25, duration: 1.5 } }
  };


  const ref0 = useRef(null);
  const isInView0 = useInView(ref0, { once: true });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2= useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });


  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });



  return (
    <>
      <NavBar />
    
      <main>
        <Carousel slides={slides} autoPlay interval={5000} />

      <motion.div
        ref={ref0}
        initial="initial"
        animate={isInView0 ? "animate" : "initial"}
        transition={{ duration: 0.2, delay: 0 }}
        variants={variant}
      > 

      <div className="p-7 justify-center mx-auto flex flex-wrap gap-24 mt-2">


        <aside className="flex flex-row gap-4 md:border-r md:pr-24">


            <div className="flex flex-col gap-2 w-[240px] ">

              <Image
                src="/entrega.png"
                width={40}
                height={40}
                alt="imagem de entrega"
                loading="lazy"
              /><h1 className="f text-[14px]  font-bold">ENTREGA MAIS RÁPIDA</h1>
              <span className="font-normal text-[14px] text-justify">Entrega em 24/H sobre confirmação de pagamento em transferência ou depósito bancário.</span>
          </div>
        </aside>


 
        <aside className="flex flex-row gap-4 md:border-r md:pr-24">


          <div className="flex flex-col gap-2 w-[240px]">

              <Image
                src="/trop.svg"
                width={40}

                className="-mt-4 bg-transparent"
                height={40}
                alt="imagem de entrega"
                loading="lazy"
              />
              <h1 className="font-bold text-[14px] font-bold">RETORNO EM 24 HORAS</h1>
              <span className="font-normal text-[14px] text-justify">
                As devoluções são feitas apenas sobre defeitos de fábrica. As devoluções não poderão ser efectuadas 24 horas após a data de compra.
                Os artigos e as embalagens a devolver terão de estar em boas condições.
                Sujeito a desconto de 12% referentes despesas bancarias e custos administrativos.
              </span>
          </div>
        </aside>
        <aside className="flex flex-row gap-4 md:border-r md:pr-24">


            <div className="flex flex-col gap-2">
              <Image
                src="/pagamento.svg"
                width={40}
                height={40}
                className="-mt-4 bg-transparent"
                alt="imagem de entrega"
                loading="lazy"
              />
              <h1 className="font-bold text-[14px]  font-bold">PAGAMENTO SEGURO</h1>
          <span className="font-normal text-[14px]">Seu dinheiro está seguro</span>
          </div>
        </aside>

        <aside className="flex flex-row gap-4 "> 
            <div className="flex flex-col gap-2">
              <Image
                src="/music.svg"
                width={40}
                height={40}
                className="-mt-4 bg-transparent"
                alt="imagem de entrega"
                loading="lazy"
              />
              <h1 className="font-bold text-[14px]  font-bold">SUPORTE DE 24 HORAS POR <br /> DIA, 7 DIAS POR SEMANA</h1>
            <span className="font-normal text-[14px]">Contato/mensagem ao vivo</span>
          </div>
        </aside>

      </div>

      </motion.div>
      <motion.div
        ref={ref1}
        initial="initial"
        animate={isInView1 ? "animate" : "initial"}
        transition={{ duration: 0.2, delay: 0 }}
        variants={variant}
      > 
      <DecorativeElements variant="waves" position="top" />
      <Product />
      <DecorativeElements variant="balls" position="bottom" />

      </motion.div>
     
      <motion.div
        ref={ref2}
        initial="initial"
        animate={isInView2 ? "animate" : "initial"}
        transition={{ duration: 0.2, delay: 0 }}
        variants={variant}
      > 
        <div className="relative">
          <Publicity />
        </div>

      </motion.div>
         
    
      <div className="flex flex-col md:flex-row gap-8 mx-auto relative">
          <motion.div
            ref={ref3}
            initial="initial"
            animate={isInView3 ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: 0 }}
            variants={variant}
          >
            <PublicityProductSecond />
          </motion.div>

        <motion.div
          ref={ref4}
          initial="initial"
          animate={isInView4 ? "animate" : "initial"}
          transition={{ duration: 0.2, delay: 0 }}
          variants={variant}
        > 
          <Product2 />
        </motion.div>

      </div>

      <SplashAnimation />
      <Partners />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />

    </>
  );
}


