import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TSession = {
  $createdAt: Date;
  $id: string;
  sessionId: string;
  clientCode: string;
  clientEngine: string;
  clientEngineVersion: string;
  clientName: string;
  clientType: string;
  clientVersion: string;
  countryCode: string;
  countryName: string;
  current: boolean;
  deviceBrand: string;
  deviceModel: string;
  deviceName: string;
  expire: Date;
  ip: string;
  osCode: string;
  osName: string;
  osVersion: string;
  provider: string;
  providerAccessToken: string;
  providerAccessTokenExpiry: string;
  providerRefreshToken: string;
  providerUid: string;
  userId: string;
};

type TAccount = {
  $createdAt: Date;
  $id: string;
  $updatedAt: Date;
  accessedAt: Date;
  email: string;
  emailVerification: boolean;
  labels: [];
  name: string;
  passwordUpdate: Date;
  phone: string;
  phoneVerification: boolean;
  prefs: {};
  registration: Date;
  status: boolean;
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
