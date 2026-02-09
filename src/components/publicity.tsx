import Image from "next/image"
import style from "./style.module.css"
import Link from 'next/link';


export function Publicity() {
    const phone = 933103913;
    const menssage = "Olá! Estou interessado(a) em um dos produtos de sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!";

    return (
        <>

            <div className={`left-0 right-0 mx-auto w-[85%] md:w-[80%] flex justify-between py-4 px-6 bg-[#072a4a] mb-24 z-30 rounded-lg shadow-lg ${style.cont}`}>
                <div className="text-white flex flex-col gap-9">
                    <label htmlFor="" className="font-normal md:text-[18px] sm:text-[14px] md:w-[195px] sm:w-[165px] bg-[#2591d2] py-[6px] px-[12px] ">Economizar até 20%</label>
                    <div>
                        <h2 className="font-semibold md:text-[36px]  sm:text-[24px]">BEM-ESTAR & CUIDADOS</h2>
                        <span className="w-[360px] md:text-[16px] sm:text-[14px]">Soluções integradas que acompanham o seu ritmo. Oferecemos uma linha selecionada de cuidados de higiene, estética e conveniência para o seu ambiente corporativo e para o conforto da sua família. Da energia do café à excelência nos cuidados diários, garantimos o suporte necessário para o seu dia a dia.
 </span>
                    </div>

                    <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className="rounded-[4px]  bg-[#fa8232] py-[12px] px-[32px] text-white md:w-[206px] sm:w-[180px]  sm:text-[14px] flex flex-row gap-3 " >
                        Compre&nbsp;agora
                        <Image
                            alt=""
                            src="setD.svg"
                            width={24}
                            height={24} />

                    </Link>
                </div>

                <Image
                    alt=""
                    src="publicity.svg"
                    width={637}
                    height={425}
                    className={`${style.img}`} />
            </div>
        </>
    )
}