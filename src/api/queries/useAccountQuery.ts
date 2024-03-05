import * as process from 'process';
import { useQuery } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';

const fetchAccount = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.GET_ACCOUNT, {
    method: 'GET',
    headers: {
      'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

const useAccountQuery = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: fetchAccount,
  });
};

export { useAccountQuery, fetchAccount };
