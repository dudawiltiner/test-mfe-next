import axios from 'axios';
import { getSession } from 'next-auth/react';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_TODO_LIST_URL,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const session = await getSession();

    if (session) {
      request.headers = request.headers || {};

      request.headers.Authorization = `Bearer ${session.jwt}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = axiosInstance;
