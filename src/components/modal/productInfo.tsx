"use client";

import { Dialog, DialogActions, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { useZustand } from "../../context/zustand";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<HTMLElement>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type dataType = {
  product: {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
  };
};

export function ModalProduct(product: dataType) {
  const { openProductFirst, handleClickFirst } = useZustand();

  const handleClose = () => {
    handleClickFirst(false);
  };

  const formatCurrency = (value: number, currency = 'AOA') => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  const phone = 936884337;

  const handleDialogClose = (event: React.MouseEvent<HTMLDivElement>) => {
    const dialogContent = event.currentTarget.querySelector('.MuiDialogContent-root');
    if (dialogContent && !dialogContent.contains(event.target as Node)) {
      handleClose();
    }
  };

  return (
    <>
      <Dialog
        open={openProductFirst}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        onClick={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
     className="bg-gray"
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
        }}
        disableEscapeKeyDown
      >
        <DialogContent>
          <div className="mt-4 flex flex-col gap-4">
            <div>
            <Image
                alt="produto"
                src={`${product?.product?.srcImage}`}
                width={200}
                height={250}
                className="mx-auto h-[250px] w-[320px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold">{product?.product?.nameProduct}</h2>
              <h2 className="text-base font-semibold">Preço {formatCurrency(product?.product?.price)}</h2>

              <Link
                href={`https://wa.me/${phone}?text=Olá! Estou interessado(a) no produto ${product?.product?.nameProduct} que esta no valor de ${formatCurrency(product?.product?.price)}. Poderia me fornecer mais informações sobre ele, disponibilidade e características? Obrigado(a)!`}
                className="flex mt-4 gap-1 bg-[#F3DE6D] p-2 rounded-lg w-full justify-center" target="_blank"
              >
                <span className="text-[#191c1f] font-medium">Comprar</span>
                <Image
                  src="/set.svg"
                  alt="seta"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </Link>
            </div>
          </div>
        </DialogContent>
 <DialogActions className="flex flex-rows gap-5 mr-5">
          <button
            onClick={handleClose}
            className="font-medium mr-4 text-sm absolute top-5 right-3 text-black"
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
