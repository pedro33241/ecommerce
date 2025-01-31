import Image from "next/image"
import Link from 'next/link';

export function PublicityProductSecond(){
    const phone = 936884337;
    const menssage = "Olá! Estou interessado(a) em dos produtos de sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
   
    return(
        <>
     <div className=" flex items-center justify-center  ">   
 <div className={`flex flex-col md:ml-12 `}>




         <div className={`flex flex-col justify-center mx-auto h:mb-24  `}>

<div className="bg-[#f3de6d] w-[312px] h-[288px] pt-3">
    <div className="text-center flex flex-col justify-center ">
        
<h1 className="text-[#be4646] font-semibold text-[14px] mx-auto mt-3 text-center ">Escritório e Escolar</h1>

<h3 className="font-semibold text-[32px] text-center "> 32% Desconto</h3>

<h5 className="text-[#475156] font-normal text-[16px]">Para todos os matérias de <br/> Escritório e Escolar</h5>
<br/>

<label className="font-medium text-[14px] flex flex-row gap-3 text-center justify-center ">Ofertas terminam em: <span className="-mt-2.5 bg-white rounded-sm text-black  font-semibold text-[14px] py-3 px-3 ">Fim do Natal</span></label>
<br/>
                                <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank"  className="rounded-[4px]  bg-[#2591d2] py-[12px] px-[32px] text-white w-[80%]  mx-auto   justify-center flex flex-row gap-3 " > Comprar&nbsp;agora 
<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.625 10h13.75M11.75 4.375 17.375 10l-5.625 5.625" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</Link>
</div>


</div><div/></div>



<Image
alt="imagem de publicidade"
src="set2.svg"
width={312}
height={428}/>

</div>
</div>
        </>
    )
}