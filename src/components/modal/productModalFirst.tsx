"use client"

import {  Dialog, DialogActions, DialogContent, Slide } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react"

import Image from "next/image"
import Link from "next/link"
import {useZustand} from "../../context/zustand"

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<HTMLElement>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 
type dataType = {
   product:{
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
   }
}

export function ModalProductFirst(product: dataType) {

     
 const {open,handleClick} = useZustand()
    
  const handleClose2 = () => {
  
      handleClick(false);
     
  };
  console.log(product)

  const formatCurrency = (value:any, currency = 'AOA') => {
    return new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: currency,
    }).format(value);
};



const phone = 947032985;

  const handleDialogClose2 = (
    _event: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason && (reason === "backdropClick" || reason === "escapeKeyDown")) {
      return;
    }
    handleClose2();
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose2}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            width: "90%",
            maxWidth: "45%",
            height: "403px",
            fontWeight: "700",
            borderRadius: "8px",
            maxHeight: "80%",
          },
        }}
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
        }}
        disableEscapeKeyDown
      >
     
        <DialogContent>
       
    <div className="mt-10 flex sx:flex-col gap-10 md:flex-row justify-between">
    <div className="border boder-gray-900">
    <Image 
    alt="produto"
    src={`${product?.product?.srcImage}`}
    width={200}
    height={250}
    className="mx-auto h-[250px] w-[220px] object-cover"
  />
</div>

<div className="w-[50%]" >
<h2 className="md:text-[18px] sx:text-[16px] mf:text-[23px]">{product?.product?.nameProduct}</h2>
<br/>
<h2 className="md:text-[15px] sx:text-[14px] mf:text-[19px]">  Preço {formatCurrency(product?.product?.price)}</h2>

<Link href={`https://wa.me/${phone}?text=Olá! Estou interessado(a) no produto ${product?.product?.nameProduct} que esta no valor de ${formatCurrency(product?.product?.price)}. Poderia me fornecer mais informações sobre ele, disponibilidade e características? Obrigado(a)!`} className="outline-none flex mt-4 mb-3 gap-1 mr-10 bg-[#F3DE6D] pl-7 rounded-[2px] w-[150px] h-[48px]">
                          <span className="font-bold sx:text-xs md:text-[14px] text-[#191c1f] sx:mt-4 md:mt-4">Comprar</span>
                          <Image
                              src="/set.svg"
                              alt="seta"
                              width={20}
                              height={20}
                              className="m-3 "
                          />
                      </Link>
    
</div>


    </div>
        </DialogContent>
        <DialogActions className="flex flex-rows gap-5 mr-5 ">
          <button
            onClick={handleClose2}
            className="font-medium mr-4 text-sm absolute top-5 right-3  text-black"
          >
            <Image 
                      alt="closed"
                      src="closed.svg"
                      width={24}
                      className="mx-auto w-[24px] h-[24px]"
                      height={24}
                      
                      />
          </button>
       
        </DialogActions>
      </Dialog>
    </>
  );
}