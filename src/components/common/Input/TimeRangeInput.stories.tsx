import { useForm } from 'react-hook-form';
import { TimeRangeInput, TimeRangeInputProps } from './TimeRangeInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { rgb2hex } from '@/lib/color';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/common/TimeRangeInput',
  component: TimeRangeInput,
  parameters: {
    docs: {
      description: {
        component: `시간 인풋입니다. 최소 약속 시간을 설정할 때 사용합니다`,
      },
    },
  },
} as ComponentMeta<typeof TimeRangeInput>;

const Template: ComponentStory<typeof TimeRangeInput> = ({ css }: TimeRangeInputProps) => {
  const { register } = useForm();
  return (
    <TimeRangeInput
      fromHourRegister={register('fromHour')}
      fromMinuteRegister={register('fromMinute')}
      toHourRegister={register('toHour')}
      toMinuteRegister={register('toMinute')}
      css={css}
    />
  );
};

export const Default = Template.bind({});

export const Focused = Template.bind({});
Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const hourInput = await canvas.findByText('시작 시간: 시간');
  const container = hourInput.parentElement?.parentElement?.parentElement;

  await userEvent.click(hourInput);

  const style = container ? getComputedStyle(container) : { backgroundColor: '' };
  const bgColor = style.backgroundColor ? rgb2hex(style.backgroundColor) : '';

  await expect(bgColor).toEqual('#FFF9EB');
};
