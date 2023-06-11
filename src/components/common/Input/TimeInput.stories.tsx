import { TimeInput, TimeInputProps } from './TimeInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rgb2hex } from '@/lib/color';
import { useForm } from 'react-hook-form';

export default {
  title: 'Components/common/TimeInput',
  component: TimeInput,
  parameters: {
    docs: {
      description: {
        component: `시간 인풋입니다. 최소 약속 시간을 설정할 때 사용합니다`,
      },
    },
  },
} as ComponentMeta<typeof TimeInput>;

const Template: ComponentStory<typeof TimeInput> = ({ css }: TimeInputProps) => {
  const { register } = useForm();
  return (
    <TimeInput hourRegister={register('hour')} minuteRegister={register('minute')} css={css} />
  );
};

export const Default = Template.bind({});

export const Focused = Template.bind({});
Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const hourInput = await canvas.findByText('시간');
  const container = hourInput.parentElement?.parentElement;

  await userEvent.click(hourInput);

  const style = container ? getComputedStyle(container) : { backgroundColor: '' };
  const bgColor = style.backgroundColor ? rgb2hex(style.backgroundColor) : '';

  await expect(bgColor).toEqual('#FFF9EB');
};
