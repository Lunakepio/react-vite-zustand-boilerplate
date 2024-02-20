import { create } from 'zustand';

export const useGlobalStorage = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));


