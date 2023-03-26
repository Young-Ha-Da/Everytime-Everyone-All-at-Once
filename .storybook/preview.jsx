import { initialize } from 'msw-storybook-addon';
import ko from 'axe-core/locales/ko.json';
import { globalDecorators } from './decorators';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: { locale: ko },
  },
};

export const decorators = globalDecorators;
