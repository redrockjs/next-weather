import * as process from 'process';
import { useQuery } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TAccount } from '@constants/types/api.const';

const GetAccountFn = async (): Promise<TAccount> => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.GET_ACCOUNT, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(`401 Unauthorized`);
    } else {
      throw new Error('Network response was not ok');
    }
  }

  return await response.json();
};

const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: GetAccountFn,
  });
};

export { useGetAccount, GetAccountFn };
