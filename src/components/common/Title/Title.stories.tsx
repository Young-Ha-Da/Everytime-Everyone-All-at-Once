import { Title, TitleProps } from './Title';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: `타이틀 입니다`,
      },
    },
  },
  argTypes: {
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: TitleProps) => <Title {...args} />;

export const Visible = Template.bind({});
Visible.args = {
  tag: 'h1',
  children: '대제목',
};

export const Invisible = Template.bind({});
Invisible.args = {
  tag: 'h2',
  children: '중제목',
  className: 'srOnly',
};
