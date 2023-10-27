'use client';
import { SessionProvider } from 'next-auth/react';
import { CustomProviderProps } from './types';

export default function NextAuthProvider({ children }: CustomProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
