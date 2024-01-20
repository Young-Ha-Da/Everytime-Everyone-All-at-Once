import { Dayjs } from 'dayjs';
import { ChangeEvent, useEffect, useState } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

interface TimeInputProps {
  label: string;
  value: Dayjs;
  onChange: (date: Dayjs) => void;
}

const TimeInput = (props: TimeInputProps) => {
  const { label, value, onChange } = props;
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
    <InputBox>
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
      <span>:</span>
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
    </InputBox>
  );
};

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: transparent;
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

export interface TimeRangeInputProps {
  label: string;
  from: Dayjs;
  onChangeFrom: (date: Dayjs) => void;
  to: Dayjs;
  onChangeTo: (date: Dayjs) => void;
  /**
   * 컴포넌트 레이아웃을 잡을 때 덮어씌울 css. styled-component의 css함수로 생성한 스타일을 넣어주세요.
   */
  css?: FlattenSimpleInterpolation;
}

export const TimeRangeInput = (props: TimeRangeInputProps) => {
  const { label, from, onChangeFrom, to, onChangeTo, css } = props;

  return (
    // props으로 받아온 css를 넘겨줘야 하는데 타입 지정 안해주면 에러남
    <Container css={css}>
      <TimeInput value={from} onChange={onChangeFrom} label={`${label}-from`} />
      <span>~</span>
      <TimeInput value={to} onChange={onChangeTo} label={`${label}-to`} />
    </Container>
  );
};

const Container = styled.div<Partial<TimeRangeInputProps>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: 44px;
  padding: 12px 30px;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
  ${({ css }) => css}

  &:has(*:focus) {
    background-color: #fff9eb;
  }
`;
