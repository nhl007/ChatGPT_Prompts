'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type providerProps = {
  children: React.ReactNode;
};

const Provider = ({ children }: providerProps) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;
