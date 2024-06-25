import { rgb2hex } from '@/lib/color';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import dayjs from 'dayjs';
import { useState } from 'react';
import { TimeRangeInput, TimeRangeInputProps } from './TimeRangeInput';

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
  const [from, setFrom] = useState(dayjs());
  const [to, setTo] = useState(dayjs());

  return (
    <TimeRangeInput
      label={'TimeRangeInput'}
      from={from}
      onChangeFrom={setFrom}
      to={to}
      onChangeTo={setTo}
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
