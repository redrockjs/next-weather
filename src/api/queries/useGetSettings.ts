import process from 'process';
import { BackendRoutesEnum } from '@constants/routes';
import { useQuery } from '@tanstack/react-query';

type TResponse = {
  temperature: 'celsius';
  pressure: 'mmhg';
  geolocation: true;
  local: 'en';
  windforce: 'kmh';
};

const getSettingsFn = async (): Promise<TResponse> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACK_URL + BackendRoutesEnum.CURRENT_SETTINGS,
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

const useGetSettings = () => {
  return useQuery({
    queryKey: ['settings'],
    queryFn: getSettingsFn,
  });
};

export { useGetSettings, getSettingsFn };
