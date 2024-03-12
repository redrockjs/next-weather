import * as process from 'process';
import { useQuery } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TSession } from '@constants/types/api.const';

type TRequest = {
  sessionId: string;
};

type TResponse = TSession;

const getSessionFn = async ({ sessionId }: TRequest): Promise<TResponse> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.SESSIONS + `/${sessionId}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.ok) {
    return await response.json();
  } else {
    if (response.status === 400) throw new Error(`400 Bad request`);
    if (response.status === 401) throw new Error(`401 Unauthorized`);
    if (response.status === 500) throw new Error('500 Internal server error');

    throw new Error(`${response.status} Network response was not ok`);
  }
};

const useGetSession = ({ sessionId }: TRequest) => {
  return useQuery({
    queryKey: ['session'],
    queryFn: () => getSessionFn({ sessionId }),
  });
};

export { useGetSession, getSessionFn };
