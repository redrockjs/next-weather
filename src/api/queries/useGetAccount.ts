import * as process from 'process';
import { useQuery } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TAccount } from '@constants/types/api.const';

const getAccountFn = async (): Promise<TAccount> => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.ACCOUNT, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    return await response.json();
  } else {
    if (response.status === 400) throw new Error(`400 Bad request`);
    if (response.status === 401) throw new Error(`401 Unauthorized`);
    if (response.status === 500) throw new Error('500 Internal server error');

    throw new Error(`${response.status} Network response was not ok`);
  }
};

const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: getAccountFn,
  });
};

export { useGetAccount, getAccountFn };
