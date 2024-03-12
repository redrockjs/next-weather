export type TSession = {
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

export type TAccount = {
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

export type TSettings = {
  temperature: string;
  windforce: string;
  pressure: string;
  local: string;
  geolocation: true;
};
