import { useMutation, useQueryClient } from 'react-query';
import { api } from 'src/services/axiosConfig';
import { CreateTaskParams } from './types';

async function fetchCreateTask(params: CreateTaskParams) {
  const body = params;

  const { data } = await api.post('/todo-list', JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  const { mutate, data, isLoading, error } = useMutation(fetchCreateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['list-tasks']);
    },
  });

  return {
    mutate,
    data,
    isLoading,
    error,
  };
}
