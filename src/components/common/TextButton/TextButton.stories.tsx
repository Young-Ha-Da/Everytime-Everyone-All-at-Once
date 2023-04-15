import { TextButton, ButtonProps } from './TextButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/TextButton',
  component: TextButton,
  argTypes: {
    backgroundColor: {
      options: [
        'var(--red)',
        'var(--yellow)',
        'var(--light-yellow)',
        'var(--green)',
        'var(--purple)',
        'var(--gray)',
      ],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `텍스트 버튼입니다`,
      },
    },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args: ButtonProps) => <TextButton {...args} />;

export const BigButton = Template.bind({});
BigButton.args = {
  size: 'big',
  backgroundColor: 'var(--purple)',
  children: '버튼',
};

export const MidiumButton = Template.bind({});
MidiumButton.args = {
  size: 'midium',
  backgroundColor: 'var(--light-yellow)',
  children: '버튼',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  backgroundColor: 'var(--yellow)',
  children: '버튼',
};
