'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';


interface props{
  children: React.ReactNode
}
const queryClient = new QueryClient();

export function QueryClientWrapper({ children }: props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
