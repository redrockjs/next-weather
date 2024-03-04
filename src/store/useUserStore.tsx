import { create } from 'zustand';

type TSession = {
  sessionId: string;
  userId: string;
  expire: string;
  provider: string;
  ip: string;
  countryCode: string;
  countryName: string;
};

type TAccount = {
  accountId: string;
  name: string;
  email: string;
};

type TUserStore = {
  session: TSession | null;
  setSession: (data: TSession) => void;
  clearSession: () => void;
  account: TAccount | null;
  setAccount: (data: TAccount) => void;
  clearAccount: () => void;
  clearAll: () => void;
};

const useUserStore = create<TUserStore>((set) => ({
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
}));
