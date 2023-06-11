import { TimeRangeText, TimeRangeTextProps } from './TimeRangeText';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/common/TimeRangeText',
  component: TimeRangeText,
  parameters: {
    docs: {
      description: {
        component: `TimeRangeInput에 대응되는 텍스트 컴포넌트입니다`,
      },
    },
  },
} as ComponentMeta<typeof TimeRangeText>;

const Template: ComponentStory<typeof TimeRangeText> = ({ ...args }: TimeRangeTextProps) => (
  <TimeRangeText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fromHour: 12,
  fromMinute: 0,
  toHour: 14,
  toMinute: 30,
};
