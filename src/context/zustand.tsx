import { create } from 'zustand';


type zustandData = {
    open: boolean;
    handleClick: (value: boolean) => void;
}

export const useZustand = create<zustandData>((set) => ({
    open: false,
    handleClick: (value: boolean) => set({ open: value })
}));