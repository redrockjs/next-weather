import * as process from 'process';
import { BackendRoutesEnum } from '@constants/routes';
import { useMutation } from '@tanstack/react-query';

type TRequest = {
  sessionId: string;
};

const RemoveEmailSessionFn = async ({ sessionId }: TRequest) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.SESSIONS + `/${sessionId}`,
    {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
        'Content-Type': 'application/json',
      },
    },
  );
  return await res.json();
};

const useRemoveEmailSession = () => {
  return useMutation({
    mutationKey: ['session'],
    mutationFn: RemoveEmailSessionFn,
  });
};

export { useRemoveEmailSession, RemoveEmailSessionFn };
