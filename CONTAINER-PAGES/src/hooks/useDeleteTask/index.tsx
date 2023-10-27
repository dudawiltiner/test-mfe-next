import { useMutation, useQueryClient } from 'react-query';
import { api } from 'src/services/axiosConfig';

async function fetchDeleteTask(id: number) {
  const { data } = await api.delete(`/todo-list/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  const { mutate, data, isLoading, error } = useMutation(fetchDeleteTask, {
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
