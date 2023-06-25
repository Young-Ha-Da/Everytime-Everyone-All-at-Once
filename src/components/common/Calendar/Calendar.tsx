import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '@/assets/caret-down-solid.svg';

export interface CalendarProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  selectedDates?: Number[];
  availableDates?: Number[];
  onClickDate: (date: Number) => void;
}

interface DateGridProps {
  firstDay: number;
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const Calendar = ({
  currentDate,
  setCurrentDate,
  selectedDates,
  availableDates,
  onClickDate,
}: CalendarProps) => {
  const [year, month] = [currentDate.getFullYear(), currentDate.getMonth()];
  const firstDay = currentDate.getDay() + 1;
  const lastDate = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: lastDate }, (_, i) => i + 1);

  return (
    <CalendarWrapper>
      <MonthNavigation>
        <button
          onClick={() => {
            setCurrentDate(new Date(year, month - 1, 1));
          }}
        >
          <ArrowLeft />
        </button>
        <Title>{`${year}년 ${month + 1}월`}</Title>
        <button
          onClick={() => {
            setCurrentDate(new Date(year, month + 1, 1));
          }}
        >
          <ArrowRight />
        </button>
      </MonthNavigation>
      <DateGrid firstDay={firstDay}>
        {DAYS.map((day) => (
          <Day>{day}</Day>
        ))}
        {dates.map((date) => {
          const selected = selectedDates?.includes(date) ? 'selected' : '';
          const disabled = availableDates?.includes(date) ? '' : 'disabled';
          const hasAvailableDates = availableDates !== undefined;
          const className = `${selected} ${hasAvailableDates ? disabled : ''}`;

          return (
            <DateItem
              className={className}
              onClick={() => {
                onClickDate(date);
              }}
            >
              {date}
            </DateItem>
          );
        })}
      </DateGrid>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 260px;
  height: fit-content;
  padding: var(--space-xs) 0;
  background: var(--white);
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
`;

const MonthNavigation = styled.div`
  display: flex;
  gap: 10px;
`;

const ArrowLeft = styled(ArrowDown)`
  height: 20px;
  rotate: 90deg;
`;

const ArrowRight = styled(ArrowDown)`
  height: 20px;
  rotate: -90deg;
`;

const Title = styled.div`
  width: 100px;
  margin: var(--space-sm) 0;
  text-align: center;
  font-weight: var(--text-bold);
`;

const DateGrid = styled.div<DateGridProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding-top: var(--space-xs);
  border-top: 1px solid var(--black);
  font-size: var(--text-sm);
  div:nth-child(8) {
    grid-column-start: ${({ firstDay }) => firstDay};
  }
`;

const Day = styled.div`
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
`;

const DateItem = styled.div`
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;

  &:hover {
    background-color: var(--gray);
    border-radius: 50px;
    transition: 0.6s cubic-bezier(0.08, 0.35, 0.13, 1.02);
  }

  &.selected {
    background-color: var(--yellow);
    border: 1px solid var(--black);
    border-radius: 50px;
  }

  &.disabled {
    color: var(--gray);
    background-color: unset;
    border: none;
    transition: none;
  }
`;
