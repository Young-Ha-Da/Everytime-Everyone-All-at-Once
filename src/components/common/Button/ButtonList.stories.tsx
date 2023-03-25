import { ButtonList, tasks } from './ButtonList';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';

export default {
  title: 'Components/common/ButtonList',
  component: ButtonList,
  parameters: {
    docs: {
      description: {
        component: `기본 버튼 리스트입니다`,
      },
    },
  },
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = (args: ButtonList) => <ButtonList {...args} />;

export const Error = Template.bind({});
Error.args = {
  error: true,
};
Error.parameters = {
  msw: {
    handlers: [
      rest.get('/tasks', (req, res, ctx) => {
        return res(ctx.json([]));
      }),
    ],
  },
};
export const Success = Template.bind({});
Success.args = {
  error: false,
};
Success.parameters = {
  msw: {
    handlers: [
      rest.get('/tasks', (req, res, ctx) => {
        return res(ctx.json(tasks));
      }),
    ],
  },
};
