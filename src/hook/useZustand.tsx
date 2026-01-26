import { create } from "zustand";



type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
    quantity?: number;
};
type ZustandType = {
    open: boolean;
    data: ProductType[];
    handleOpen: () => void;
    setData: (newData: ProductType[]) => void;
    addData: (newItem: ProductType) => void;
    removeData: (removeId: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
};

export const useStore = create<ZustandType>((set) => ({
    open: false,
    data: [],

    handleOpen: () => set((state) => ({ open: !state.open })),

    setData: (newData) => set({ data: newData }),

    addData: (newItem) =>
        set((state) => {
            const existingItem = state.data.find((item: ProductType) => item.id === newItem.id);
            if (existingItem) {
                return {
                    data: state.data.map((item: ProductType) =>
                        item.id === newItem.id
                            ? { ...item, quantity: (item.quantity || 1) + 1 }
                            : item
                    ),
                };
            }
            return {
                data: [...state.data, { ...newItem, quantity: newItem.quantity || 1 }],
            };
        }),

    removeData: (removeId: number) =>
        set((state) => ({
            data: state.data.filter((item: { id: number }) => item.id !== removeId),
        })),

    updateQuantity: (id: number, quantity: number) =>
        set((state) => ({
            data: state.data.map((item: ProductType) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            ),
        })),

    incrementQuantity: (id: number) =>
        set((state) => ({
            data: state.data.map((item: ProductType) =>
                item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            ),
        })),

    decrementQuantity: (id: number) =>
        set((state) => ({
            data: state.data.map((item: ProductType) =>
                item.id === id && (item.quantity || 1) > 1
                    ? { ...item, quantity: (item.quantity || 1) - 1 }
                    : item
            ),
        }))
}));
