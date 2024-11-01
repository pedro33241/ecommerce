"use client"


import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

export function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
const handleClick = ()=>{
    setIsVisible(false)
}
    return(
        <>
   <div className="h-[80px] w-full bg-[#0071c1] flex m-0 justify-between">
 <div className="ml-10">
   <Link href="">
   <Image
     src="/logo.svg"
     alt="logo"
     width={122}
     height={62}
     className="m-3"
     />
   </Link></div>
 <div className="bg-white w-[30%] h-[48px] rounded-sm flex  mx-auto mt-4">
     <input type="text" placeholder="Pesquisar Produto..." className="w-full pl-3 outline-none  rounded-sm" />
     <Image
     src="/search.svg"
     alt="search"
     width={20}
     height={20}
     className="m-3"
     />
 </div>
 <div className="flex gap-1 mr-10">


 <Image
     src="/payment.svg"
     alt="follow"
     width={32}
     height={32}
     className="m-3"
     />


<Image
     src="/follow.svg"
     alt="follow"
     width={32}
     height={32}
     className="m-3"
     />



<Image
     src="/User.svg"
     alt="User"
     width={32}
     height={32}
     className="m-3"
     />

     
 </div>
 </div>


 {isVisible && (<>

 <div className="h-[80px] w-full bg-[#191c1f] relative   ">

<div className="w-[80%] mx-auto bg-[#191c1f] flex   justify-between">
<div className="ml-24 mt-4">
 <label
className="bg-[#f3de6d] w-[74px] h-[40px] px-[18px] pt-[8px] font-semibold"
style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}
>
Black
</label>
<label className="font-semibold text-[24px] ml-4 text-white ">Friday</label>

</div>
 <div className="flex">
   <span className="text-[14px] text-white font-medium mt-8 mr-3">Até</span> <span className="mt-2 text-[#ebc80c] font-semibold text-[40px]">59%</span> 
   <span className="font-semibold text-[20px] text-white mt-6 ml-3 ">de Desconto</span>
 </div>

 <div>
 <button className="outline-none flex mt-4  gap-1 mr-10 bg-[#ebc80c] pl-7 rounded-[2px] w-[194px] h-[48px]">
  <span className="font-bold text-[14px] text-[#191c1f] mt-3 ">   COMPRE AGORA</span>
   
<Image
     src="/set.svg"
     alt="seta"
     width={20}
     height={20}
     className="m-3"
     />
   
     </button>


 </div>
</div>

<button onClick={handleClick} className="outline-none w-[32px] h-[32px] bg-[#303639] top-5 rounded-[2px] absolute right-6 ">
<Image
     src="/closed.svg"
     alt="closed"
     width={16}
     height={16}
     className="ml-2"
     />

</button>
 </div>


    </>   )}



        </>
    )
}