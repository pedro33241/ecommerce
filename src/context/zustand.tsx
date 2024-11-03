import { create } from 'zustand';


type zustandData = {
    openProductFirst: boolean;
    openProductSecond: boolean;
    handleClickFirst: (value: boolean) => void;
    handleClickSecond: (value: boolean) => void;
}

export const useZustand = create<zustandData>((set) => ({
    openProductFirst: false,
    openProductSecond: false,
    handleClickFirst: (value: boolean) => set({ openProductFirst: value }),
    handleClickSecond: (value: boolean) => set({ openProductSecond: value })
}));