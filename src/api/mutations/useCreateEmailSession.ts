import * as process from 'process';
import { useMutation } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TSession } from '@constants/types/api.const';

type TRequest = {
  email: string;
  password: string;
};

const createEmailSessionFn = async ({ email, password }: TRequest): Promise<TSession> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.SESSIONS_EMAIL,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
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

const useCreateEmailSession = () => {
  return useMutation({
    mutationKey: ['session'],
    mutationFn: createEmailSessionFn,
  });
};

export { useCreateEmailSession, createEmailSessionFn };
