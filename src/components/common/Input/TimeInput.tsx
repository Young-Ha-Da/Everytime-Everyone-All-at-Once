import { Dayjs } from 'dayjs';
import { ChangeEvent, useEffect, useState } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface TimeInputProps {
  label: string;
  value: Dayjs;
  onChange: (date: Dayjs) => void;
  css?: FlattenSimpleInterpolation;
}

export const TimeInput = (props: TimeInputProps) => {
  const { label, value, onChange, css } = props;
  const [time, setTime] = useState<{
    hour?: number;
    minute?: number;
  }>({
    hour: value.hour(),
    minute: value.minute(),
  });

  useEffect(() => {
    setTime({
      hour: value.hour(),
      minute: value.minute(),
    });
  }, [value]);

  const handleChange = (type: 'hour' | 'minute', e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value ? Number(e.target.value) : undefined;
    const newTime = {
      hour: type === 'hour' ? newValue : time.hour,
      minute: type === 'minute' ? newValue : time.minute,
    };
    setTime(newTime);
  };

  const isValidHour = (hour: number) => 0 <= hour && hour <= 23;
  const isValidMinute = (minute: number) => 0 <= minute && minute <= 59;

  const handleBlur = () => {
    const hour = time.hour ?? 0;
    const minute = time.minute ?? 0;
    const isValid = isValidHour(hour) && isValidMinute(minute);
    isValid
      ? onChange(value.hour(hour).minute(minute))
      : setTime({ hour: value.hour(), minute: value.minute() });
  };

  return (
    <InputBox css={css}>
      <Input
        id={`${label}-hour`}
        type="number"
        autoComplete="off"
        placeholder="00"
        min={0}
        max={23}
        maxLength={2}
        value={time.hour}
        onChange={(e) => handleChange('hour', e)}
        onBlur={handleBlur}
      />
      <span>시간</span>
      <Input
        id={`${label}-minute`}
        type="number"
        autoComplete="off"
        placeholder="00"
        min={0}
        max={58}
        maxLength={2}
        value={time.minute}
        onChange={(e) => handleChange('minute', e)}
        onBlur={handleBlur}
      />
      <span>분</span>
    </InputBox>
  );
};

const InputBox = styled.div<{ css?: FlattenSimpleInterpolation }>`
  width: 260px;
  height: 44px;
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
  background-color: transparent;
  ${({ css }) => css}

  &:has(*:focus) {
    background-color: #fff9eb;
  }
`;

const Input = styled.input`
  width: 20px;
  padding: 12px 0;
  text-align: center;
  background-color: transparent;

  ::-webkit-inner-spin-button {
    display: none;
  }
`;
