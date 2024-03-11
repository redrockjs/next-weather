import * as process from 'process';
import { useQuery } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TSession } from '@constants/types/api.const';

type TRequest = {
  sessionId: string;
};

type TResponse = TSession;

const GetSessionFn = async ({ sessionId }: TRequest): Promise<TResponse> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.SESSIONS + '/' + sessionId,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(`401 Unauthorized`);
    } else {
      throw new Error('Network response was not ok');
    }
  }

  return await response.json();
};

const useGetSession = ({ sessionId }: TRequest) => {
  return useQuery({
    queryKey: ['session'],
    queryFn: () => GetSessionFn({ sessionId }),
  });
};

export { useGetSession, GetSessionFn };
