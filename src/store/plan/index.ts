import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PlanType {
  features: string[];
  id: string;
  name: string;
  payment: {
    daily: {
      amount: number;
      duration_days: number;
    };
    weekly: {
      amount: number;
      duration_weeks: number;
    };
    monthly: {
      amount: number;
      duration_months: number;
    };
    initial_deposit: number;
  };
  price: number;
}

interface PlanStore {
  plans: PlanType[];
  setPlans: (plans: PlanType[]) => void;
}

const usePlanStore = create(
  persist<PlanStore>(
    (set) => ({
      plans: [],
      setPlans: (plans: PlanType[]) => set({ plans }),
    }),
    {
      name: 'plans-hmo-storage',
      getStorage: () => localStorage,
    },
  ),
);

export default usePlanStore;

