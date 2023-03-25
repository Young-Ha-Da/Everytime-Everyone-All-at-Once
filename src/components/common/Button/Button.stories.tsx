import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/common/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `기본 버튼입니다`,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Button) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 100,
  children: 'Default Button',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  width: 100,
  height: 100,
  style: { border: '10px solid aqua' },
  children: 'Button with Aqua border',
};

export const Clicked = Template.bind({});
Clicked.args = {
  width: 100,
  height: 100,
  children: 'Click Me',
};
Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getTask = (name: string) => canvas.findByText(name);

  const itemToClick = await getTask('Click Me');
  await userEvent.click(itemToClick);

  await expect(canvas.getByRole('button').textContent).toBe('Clicked!');
};
