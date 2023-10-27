import { useMutation, useQueryClient } from 'react-query';
import { api } from 'src/services/axiosConfig';
import { UpdateTaskParams } from './types';

async function fetchUpdateTask(params: UpdateTaskParams) {
  const body = {
    name: params?.name,
    description: params?.description,
    isDone: params?.isDone,
  };

  const { data } = await api.put(
    `/todo-list/${params?.id}`,
    JSON.stringify(body),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return data;
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  const { mutate, data, isLoading, error } = useMutation(fetchUpdateTask, {
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
