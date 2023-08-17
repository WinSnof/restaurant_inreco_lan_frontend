import { create } from "zustand";

export const useDishMenuStore = create((set) => ({
  addModalOpen: false,
  setAddModalOpen: () => set((i) => ({ addModalOpen: !i.addModalOpen })),
  currentMenuId: 0,
  setCurrentMenuId: (v) => set(() => ({ currentMenuId: v })),
}));
