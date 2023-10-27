import { useMutation } from 'react-query';
import { apiAuth } from 'src/services/axiosAuthConfig';
import { RegisterUserParams } from './types';

async function fetchRegisterUser(params: RegisterUserParams) {
  const body = params;

  const { data } = await apiAuth.post('/user', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}

export function useRegisterUser() {
  const { mutate, data, isLoading, isSuccess, error } =
    useMutation(fetchRegisterUser);

  return {
    mutate,
    data,
    isLoading,
    isSuccess,
    error,
  };
}
