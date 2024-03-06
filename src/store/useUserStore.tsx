import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TAccount, TSession } from '@constants/types/api.const';

type TUserStore = {
  session: TSession | null;
  setSession: (data: TSession) => void;
  clearSession: () => void;
  account: TAccount | null;
  setAccount: (data: TAccount) => void;
  clearAccount: () => void;
  clearAll: () => void;
};

export const useUserStore = create(
  devtools<TUserStore>(
    (set) => ({
      session: null,
      setSession: (data) =>
        set((state) => ({
          ...state,
          session: data,
        })),
      clearSession: () =>
        set((state) => ({
          ...state,
          session: null,
        })),
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
      clearAll: () =>
        set((state) => ({
          ...state,
          session: null,
          account: null,
        })),
    }),
    { name: 'UserStore' },
  ),
);
