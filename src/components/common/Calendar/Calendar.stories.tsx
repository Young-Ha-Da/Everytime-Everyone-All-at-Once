import { ComponentMeta } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import { useLayoutEffect, useState } from 'react';

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

interface WholeDates {
  [key: number | string]: {
    [key: number | string]: Number[];
  };
}

const wholeSelectedDates: WholeDates = {
  2023: {
    6: Array.from({ length: 15 }, (_, i) => i + 1),
  },
};

const wholeAvailableDates: WholeDates = {
  2023: {
    6: Array.from({ length: 15 }, (_, i) => 31 - i),
  },
};

export const DefaultCalendar = (args: CalendarProps) => {
  const firstDate = new Date();
  firstDate.setDate(1);
  const [current, setCurrent] = useState(firstDate);
  const [year, month] = [current.getFullYear(), current.getMonth()];
  const [selectedDates, setSelectedDates] = useState<Number[]>(
    wholeSelectedDates[year][month + 1] ?? []
  );

  useLayoutEffect(() => {
    setSelectedDates(wholeSelectedDates[year][month + 1] ?? []);
  }, [current]);

  return (
    <Calendar
      {...args}
      currentDate={current}
      setCurrentDate={setCurrent}
      selectedDates={selectedDates}
      onClickDate={(date) => {
        const alreadyAdded = selectedDates.includes(date);
        const newSelectedDates = alreadyAdded
          ? selectedDates.filter((selectedDate) => selectedDate !== date)
          : [...selectedDates, date];
        setSelectedDates(newSelectedDates);
      }}
    />
  );
};

export const CalendarWithAvailableDates = (args: CalendarProps) => {
  const firstDate = new Date();
  firstDate.setDate(1);
  const [current, setCurrent] = useState(firstDate);
  const [year, month] = [current.getFullYear(), current.getMonth()];
  const [selectedDates, setSelectedDates] = useState<Number[]>(
    wholeSelectedDates[year][month + 1] ?? []
  );
  const [availableDates, setAvailableDates] = useState<Number[]>(
    wholeAvailableDates[year][month + 1] ?? []
  );

  useLayoutEffect(() => {
    setSelectedDates(wholeSelectedDates[year][month + 1] ?? []);
    setAvailableDates(wholeAvailableDates[year][month + 1] ?? []);
  }, [current]);

  return (
    <Calendar
      {...args}
      currentDate={current}
      setCurrentDate={setCurrent}
      selectedDates={selectedDates}
      availableDates={availableDates}
      onClickDate={(date) => {
        const alreadyAdded = selectedDates.includes(date);
        const newSelectedDates = alreadyAdded
          ? selectedDates.filter((selectedDate) => selectedDate !== date)
          : [...selectedDates, date];
        setSelectedDates(newSelectedDates);
      }}
    />
  );
};
