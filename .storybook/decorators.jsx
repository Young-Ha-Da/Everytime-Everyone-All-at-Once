import React from 'react';
import { mswDecorator } from 'msw-storybook-addon';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './../src/styles';

const queryClient = new QueryClient();

export const globalDecorators = [
  (Story) => (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Story />
      </QueryClientProvider>
    </RecoilRoot>
  ),
  mswDecorator,
];
