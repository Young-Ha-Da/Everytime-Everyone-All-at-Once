'use client';

import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
