import * as process from 'process';
import { useMutation } from '@tanstack/react-query';
import { BackendRoutesEnum } from '@constants/routes';
import { TSession } from '@constants/types/api.const';

type TRequest = {
  email: string;
  password: string;
};

const CreateEmailSessionFn = async ({ email, password }: TRequest): Promise<TSession> => {
  const res = await fetch(process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.SIGNIN, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  return await res.json();
};

const useCreateEmailSession = () => {
  return useMutation({
    mutationKey: ['session'],
    mutationFn: CreateEmailSessionFn,
  });
};

export { useCreateEmailSession, CreateEmailSessionFn };
