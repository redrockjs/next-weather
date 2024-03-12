import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TAccount } from '@constants/types/api.const';

type TUserStore = {
  account: TAccount | null;
  setAccount: (data: TAccount) => void;
  clearAccount: () => void;
};

export const useUserStore = create(
  devtools<TUserStore>(
    (set) => ({
      account: null,
      setAccount: (data) =>
        set((state) => ({
          ...state,
          account: data,
        })),
      clearAccount: () =>
        set((state) => ({
          ...state,
          account: null,
        })),
    }),
    { name: 'UserStore' },
  ),
);
