import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      registerData: null,
      setRegisterData: (registerData) => set({ registerData }),
      setLogin: (user) => set({ user }),
      setLogout: () => set({ user: null }),
    }),
    {
      name: 'auth-hmo-storage',
      getStorage: () => localStorage,
    },
  ),
);

export default useAuthStore;
