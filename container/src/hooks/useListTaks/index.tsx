import { useQuery } from 'react-query';
import { api } from 'src/services/axiosConfig';
import { ResponseTask } from './types';

async function fetchListTasks(): Promise<ResponseTask[]> {
  const { data } = await api.get('/todo-list');

  return data;
}

export function useListTasks() {
  const { data, isLoading, error } = useQuery(['list-tasks'], fetchListTasks, {
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    error,
  };
}
