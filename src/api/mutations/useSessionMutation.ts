import { useMutation } from '@tanstack/react-query';
import * as process from 'process';
import { BackendRoutesEnum } from '@constants/routes';

type TRequest = {
  email: string;
  password: string;
};

type TResponse = {};

const fetchSession = async ({ email, password }: TRequest) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.SIGNIN, {
    method: 'POST',
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

const useSessionMutation = () => {
  return useMutation({
    mutationKey: ['session'],
    mutationFn: fetchSession,
  });
};

export { useSessionMutation, fetchSession };
