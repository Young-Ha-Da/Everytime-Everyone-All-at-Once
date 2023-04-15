import React from 'react';
import { mswDecorator } from 'msw-storybook-addon';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from '../src/styles/globalStyle';
import { NormalizeStyle } from '../src/styles/normalizeStyle';

const queryClient = new QueryClient();

export const globalDecorators = [
  (Story) => (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NormalizeStyle />
        <GlobalStyle />
        <Story />
      </QueryClientProvider>
    </RecoilRoot>
  ),
  mswDecorator,
];
