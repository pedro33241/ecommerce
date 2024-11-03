import Image from "next/image"
import Link from 'next/link';

export function Footer(){

    const phone = 947032985;

    const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    return(
        <>
        <div id="contact" className=" relative w-full bg-[#f9fbfc] mt-36">

       
        <Image 
                      alt="star"
                      src="img.svg"
                      width={116}
                      className="-mt-2 top-0 absolute left-0"
                      height={124}
                      /> 

<Image 
                      alt="star"
                      src="img.svg"
                      width={116}
                      className="-mt-2 top-0 absolute right-0"
                      height={124}
                      /> 

<Image 
                      alt="star"
                      src="img.svg"
                      width={116}
                      className="-mt-2 left-0 absolute bottom-4"
                      height={124}
                      /> 

<Image 
                      alt="star"
                      src="img.svg"
                      width={116}
                      className="-mt-2 right-0 sx:hidden md:absolute bottom-4"
                      height={124}
                      /> 





<div className="flex gap-10 sx:flex-col md:flex-row justify-between mx-auto px-24 py-32">

<aside className="w-full  text-[#2E323A99] flex flex-col  ">
<Image 
        alt="star"
        src="logo2.svg"
        width={432}
        height={128}
        className="-mt-2" 
    /> 
 Copyright® 2D DINÂMICO 2024 . Todos os direitos reservados.
</aside>
<div className="flex sx:flex-col md:flex-row w-full md:gap-36 sx:gap:16">
   

<aside className="flex flex-col gap-3 ">
    <h3 className="sx:text-[13px] lg:text-[18px] text-[#191c1e]">Serviços </h3>
 

 
    <Link href="/" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">  
  Home</Link> 
<Link href="/product" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">  
  Produtos</Link>
</aside>




<aside className="flex flex-col gap-3">
    <h3 className="sx:text-[13px] lg:text-[18px] text-[#191c1e]">Contactos </h3>
    <Link href="tel:99947032985" className="text-[#2E323A99] flex flex-row gap-3  text-[14px]">   <Image 
        alt="star"
        src="Phone.svg"
        width={20}
        height={20} 
    />  (+244)&nbsp;954949449</Link>

     <Link  href={`https://wa.me/${phone}?text=${menssage}`}   className="text-[#2E323A99] flex flex-row gap-3 text-[14px] ">   <Image 
        alt="star"
        src="zap.svg"
        width={20}
        height={20} 
    />  (+244)&nbsp;954949449</Link>

<Link href="" className=" text-[#2E323A99] flex flex-row gap-3 text-[14px] ">   <Image 
        alt="star"
        src="Phone.svg"
        width={20}
        height={20} 
    />  (+244)&nbsp;954949449</Link>

<Link href="" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">   <Image 
        alt="star"
        src="email.svg"
        width={20}
        height={20} 
    />  cliente@gmail.com</Link>
</aside>
</div>

    </div>

            </div>
        </>
    )
}