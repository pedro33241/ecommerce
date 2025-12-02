import { create } from "zustand";

 

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};
type ZustandType = {
    open: boolean;
    data: ProductType[];
    handleOpen: () => void;
    setData: (newData: ProductType[]) => void;
    addData: (newItem: ProductType) => void;
    removeData: (removeId: number) => void;
};

export const useStore = create<ZustandType>((set) => ({
    open: false,
    data: [],

    handleOpen: () => set((state) => ({ open: !state.open })),

    setData: (newData) => set({ data: newData }), 

    addData: (newItem) =>
        set((state) => ({
            data: [...state.data, newItem], 
        })),

    removeData: (removeId:number) =>
        set((state) => ({
            data: state.data.filter((item:{id:number}) => item.id !== removeId),
        }))
}));
