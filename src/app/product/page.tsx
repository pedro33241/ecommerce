
import { NavBar } from "../../components/layouts/navBar/navBar";
import Image from "next/image"
import { Product } from "../../components/product";
import { Footer } from "../../components/footer/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
const ProductInfo = () => {
    return (
        <>
            <NavBar />

            <div className="gap-24 flex justify-between sx:flex-col md:flex-row px-16 mt-16">

                <div className="w-full">
                    <h1 className="md:text-[30px] sx:text-[22px] mf:text-[40px] text-[#191c1e]">Suas compras na DBSD é nossa prioridade. Entregas realizadas menos de 24hr sobre confirmação de pagamento.</h1>

                    <label className="sx:text-[13px] md:text-[20px] text-[#191c1e]">
                   Sua compra te esperando em um ponto de coleta conveniente, pronto para retirada. A poucos passos de você.  </label>
                </div>

                <div className="sx:w-full md:w-[50%] sx:itens-center sx:mx-auto"><Image
                    alt="star"
                    src="about.svg"
                    width={501}
                    height={404}
                    className="-mt-2"
                /> </div>
            </div>
            <Product />
            <Footer />
            <Analytics />
            <SpeedInsights />

        </>
    )
}


export default ProductInfo;