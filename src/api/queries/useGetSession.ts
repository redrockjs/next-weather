import * as process from 'process';
import { useQuery } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TSession } from '@constants/types/api.const';

type TRequest = {
  sessionId: string;
};

type TResponse = TSession;

const GetSessionFn = async ({ sessionId }: TRequest): Promise<TResponse> => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.GET_SESSIONS + '/' + sessionId,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
        'Content-Type': 'application/json',
      },
    },
  );
  return await res.json();
};

const useGetSession = ({ sessionId }: TRequest) => {
  return useQuery({
    queryKey: ['session'],
    queryFn: () => GetSessionFn({ sessionId }),
  });
};

export { useGetSession, GetSessionFn };
