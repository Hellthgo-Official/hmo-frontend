import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWalletStore = create(
  persist(
    (set) => ({
      wallet: null,
      setWallet: (wallet) => set({ wallet }),
      balance: null,
      setBalance: (balance) => set({ balance }),
      paymentData: null,
      setPaymentData: (paymentData) => set({ paymentData }),
    }),
    {
      name: 'wallet-hmo-storage',
      getStorage: () => localStorage,
    },
  ),
);

export default useWalletStore;

