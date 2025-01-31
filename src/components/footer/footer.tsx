import Image from "next/image"
import Link from 'next/link';

export function Footer(){
 
    const phone = 936884337;
    const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    return(
        <>
            <div id="contact" className=" relative w-full bg-[#f9fbfc] mt-36" style={{
                borderTop: '1px solid',
                borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(1, 2, 2, 0.16) 100%)',
                borderImageSlice: 1
            }}>

       
        <Image 
                      alt="star"
                      src="img.svg"
                      width={116}
                      className=" top-0 absolute left-0"
                      height={124}
                      /> 

<Image 
                      alt="star"
                      src="img.svg"
                      width={116}
                      className=" top-0 absolute right-0"
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





<div className="flex gap-10   border border-t-gray-100 shadow-lg  sx:flex-col md:flex-row justify-between mx-auto px-24 py-32">

<aside className="w-full text-[#2E323A99] flex flex-col  ">
<Image 
        alt="star"
        src="/logo.jpg"
        width={352}
        height={8}
        className="-mt-24" 
    />  
</aside>
<div className="flex sx:flex-col md:flex-row w-full md:gap-36 sx:gap-10">
   

<aside className="flex flex-col gap-3 ">
    <h3 className="sx:text-[13px] lg:text-[18px] text-[#191c1e]">Serviços </h3>
 

 
    <Link href="/" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">  
  Home</Link> 
<Link href="/product" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">  
  Produtos</Link>
</aside>




<aside className="flex flex-col gap-3">
    <h3 className="sx:text-[13px] lg:text-[18px] text-[#191c1e]">Contactos </h3>
   

                            <Link  href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className=" text-[#2E323A99] flex flex-row gap-3 text-[14px] ">   <Image 
        alt="star"
        src="Phone.svg"
        width={20}
        height={20} 
                            />  (+244)&nbsp;936 884 337</Link>

                            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className=" text-[#2E323A99]  flex flex-row gap-3  text-[14px]">   <Image 
        alt="star"
        src="email.svg"
        width={20}
        height={20} 
                            /> dbsd.angola@gmail.com</Link>
</aside>
</div>

    </div>

            </div>
        </>
    )
}