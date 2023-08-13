import { create } from "zustand";

export const useDishStore = create((set) => ({
  addModalOpen: false,
  setAddModalOpen: () => set((i) => ({ addModalOpen: !i.addModalOpen })),
}));
