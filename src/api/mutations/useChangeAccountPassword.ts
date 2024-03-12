import process from 'process';
import { BackendRoutesEnum } from '@constants/routes';
import { useMutation } from '@tanstack/react-query';

type TRequest = {
  oldPassword: string;
  password: string;
};

const changeAccountPasswordFn = async ({ oldPassword, password }: TRequest) => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.PASSWORD, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'X-Appwrite-Project': process.env.NEXT_PUBLIC_PROJECT_ID!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      oldPassword,
      password,
    }),
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

const useChangeAccountPasswordFn = () => {
  return useMutation({
    mutationKey: ['password'],
    mutationFn: changeAccountPasswordFn,
  });
};

export { useChangeAccountPasswordFn, changeAccountPasswordFn };
