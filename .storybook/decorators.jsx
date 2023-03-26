import React from 'react';
import { mswDecorator } from 'msw-storybook-addon';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const globalDecorators = [
  (Story) => (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </RecoilRoot>
  ),
  mswDecorator,
];
