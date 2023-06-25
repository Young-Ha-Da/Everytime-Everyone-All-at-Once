import { Toast, ToastProps } from './Toast';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/Toast',
  component: Toast,
  argTypes: {
    direction: {
      options: ['top', 'bottom'],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `토스트 입니다`,
      },
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args: ToastProps) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  direction: 'top',
  children: '🎉 성공적으로 약속이 생성되었습니다',
};

export const Fail = Template.bind({});
Fail.args = {
  status: 'fail',
  direction: 'bottom',
  children: '🚨 아쉽게도 약속이 생성되지 않았습니다\n다시 시도해주세요 🙏',
};
