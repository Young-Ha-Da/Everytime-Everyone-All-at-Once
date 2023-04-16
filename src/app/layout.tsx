'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle, NormalizeStyle } from '@/styles';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <NormalizeStyle />
            <GlobalStyle />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
