'use client';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles';
import { utoFont } from './font';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${utoFont.variable}`}>
      <body>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
