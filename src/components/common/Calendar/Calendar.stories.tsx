import { ComponentMeta, ComponentStory } from '@storybook/react';
import dayjs from 'dayjs';
import { Calendar, CalendarProps } from './Calendar';

export default {
  title: 'Components/common/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `캘린더입니다.`,
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = ({ ...args }: CalendarProps) => (
  <Calendar {...args} onClickDate={console.log} />
);

export const DefaultCalendar = Template.bind({});

export const CalendarWithAvailableDates = Template.bind({});
CalendarWithAvailableDates.args = {
  availableDates: Array(10)
    .fill(0)
    .map((_, i) => {
      return dayjs().date(i + 1);
    }),
};
