"use client"

import { NavBar } from "@/components/layouts/navBar/navBar";
import "./globals.css"
import { Product } from "../components/product";

import { Footer } from "../components/footer/footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import { Product2 } from "../components/product2";

import { Publicity } from "../components/publicity"
import { PublicityProductSecond } from "../components/publicity2";
import Image from "next/image"

import { motion, useInView } from "framer-motion";
import {  useRef } from "react";
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
      <div className="cover">
        <div className="back">
          <div className="back2">
            <h1 className=" text-white font-bold xl:text-5xl  mf:text-4xl text-2xl">
              Suas compras na DBSD é nossa prioridade. Entregas realizadas menos de 24hr sobre confirmação de pagamento.
            </h1>
            <div className=" text-white mf:text-lg xl:text-xl font-normal md:base">
              Sua compra te esperando em um ponto de coleta conveniente.
            </div>
          </div>
        </div>
      </div>
      <motion.div
        ref={ref0}
        initial="initial"
        animate={isInView0 ? "animate" : "initial"}
        transition={{ duration: 0.2, delay: 0 }}
        variants={variant}
      > 

      <div className="p-7 justify-center mx-auto flex flex-wrap gap-24 mt-2 border border-[#e4e7e9]">


        <aside className="flex flex-row gap-4 md:border-r md:pr-24">


            <div className="flex flex-col gap-2 w-[240px] ">

              <Image
                src="/entrega.svg"
                width={40}
                height={40}
                className=""
                alt="imagem de entrega"
              /><h1 className="font-medium text-[14px]">ENTREGA MAIS RÁPIDA</h1>
              <span className="font-normal text-[14px] text-justify">Entrega em 24/H sobre confirmação de pagamento em transferência ou depósito bancário.</span>
          </div>
        </aside>


 
        <aside className="flex flex-row gap-4 md:border-r md:pr-24">


          <div className="flex flex-col gap-2 w-[240px]">

              <Image
                src="/trop.svg"
                width={40}

                className="-mt-4"
                height={40}
                alt="imagem de entrega"
              />
              <h1 className="font-medium text-[14px]">RETORNO EM 24 HORAS</h1>
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
                className="-mt-4"
                alt="imagem de entrega"
              />
              <h1 className="font-medium text-[14px]">PAGAMENTO SEGURO</h1>
          <span className="font-normal text-[14px]">Seu dinheiro está seguro</span>
          </div>
        </aside>

        <aside className="flex flex-row gap-4 "> 
            <div className="flex flex-col gap-2">
              <Image
                src="/music.svg"
                width={40}
                height={40}
                className="-mt-4"
                alt="imagem de entrega"
              />
              <h1 className="font-medium text-[14px]">SUPORTE DE 24 HORAS POR <br /> DIA, 7 DIAS POR SEMANA</h1>
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
      <Product />


      </motion.div>
      <motion.div
        ref={ref2}
        initial="initial"
        animate={isInView2 ? "animate" : "initial"}
        transition={{ duration: 0.2, delay: 0 }}
        variants={variant}
      > 
        <Publicity />

      </motion.div>
    
      <div className="flex flex-col md:flex-row gap-8 mx-auto ">
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

      <Footer />
      <Analytics />
      <SpeedInsights />

    </>
  );
}


