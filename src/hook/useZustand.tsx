import { create } from "zustand";

type MyObject = {
    id: number;
    nanameProducte: string;
};

type ZustandType = {
    open: boolean;
    data: MyObject[];
    handleOpen: () => void;
    setData: (newData: MyObject[]) => void;
    addData: (newItem: MyObject) => void;
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
