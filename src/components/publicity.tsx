import Image from "next/image"
import style from "./style.module.css"

export function Publicity()
{
    return(
        <>

        <div className={`mx-auto mt-36 w-[80%] flex  relative justify-between py-4 px-6 bg-[#072a4a] mb-24 ${style.cont}`}>
<div className="text-white flex flex-col gap-9 mt-24">
    <label htmlFor="" className="font-normal md:text-[18px] sm:text-[14px] md:w-[195px] sm:w-[165px] bg-[#2591d2] py-[6px] px-[12px] ">Economizar até 20%</label>
    <div>
        <h2 className="font-semibold md:text-[36px]  sm:text-[24px]">Produtos de Limpeza</h2>
        <span className="w-[360px] md:text-[16px] sm:text-[14px]">Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown </span>
    </div>

    <button className="rounded-[4px]  bg-[#fa8232] py-[12px] px-[32px] text-white md:w-[206px] sm:w-[180px]  sm:text-[14px] flex flex-row gap-3 " > Compre&nbsp;agora 
<Image
alt=""
src="setD.svg"
width={24}
height={24}/>

</button>
</div>
<Image
alt=""
src="publicity.svg"
width={637}
height={425}
className={`${style.img}`}/>
        </div>
        </>
    )
}