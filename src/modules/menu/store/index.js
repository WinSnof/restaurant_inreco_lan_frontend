import {create} from "zustand";

export const useMenuStore = create((set) => ({
  addModalOpen: false,
  setAddModalOpen: () => set((i) => ({ addModalOpen: !i.addModalOpen })),
}));
