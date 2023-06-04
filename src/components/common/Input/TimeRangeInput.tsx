import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const TimeInput = ({
  label,
  register,
  pattern,
}: {
  label: string;
  register: UseFormRegisterReturn;
  pattern: string;
}) => {
  return (
    <InputBox>
      <Input
        id={register.name}
        type="text"
        inputMode="numeric"
        pattern={pattern}
        placeholder="00"
        autoComplete="off"
        maxLength={2}
        {...register}
      />
      <Label className="srOnly" htmlFor={register.name}>
        {label}
      </Label>
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
  width: 30px;
  padding: 12px 0;
  text-align: center;
  background-color: transparent;
`;
const Label = styled.label``;

export interface TimeRangeInputProps {
  fromHourRegister: UseFormRegisterReturn;
  fromMinuteRegister: UseFormRegisterReturn;
  toHourRegister: UseFormRegisterReturn;
  toMinuteRegister: UseFormRegisterReturn;
  /**
   * 컴포넌트 레이아웃을 잡을 때 덮어씌울 css. styled-component의 css함수로 생성한 스타일을 넣어주세요.
   */
  css?: FlattenSimpleInterpolation;
}

export const TimeRangeInput = ({
  fromHourRegister,
  fromMinuteRegister,
  toHourRegister,
  toMinuteRegister,
  css,
}: TimeRangeInputProps) => {
  const hourPattern = '^(0?[0-9]|1[0-9]|2[0-3])$';
  const minutePattern = '^([0-9]|[1-5][0-9])$';

  return (
    // props으로 받아온 css를 넘겨줘야 하는데 타입 지정 안해주면 에러남
    <Container css={css}>
      <Div>
        <TimeInput label="시작 시간: 시간" pattern={hourPattern} register={fromHourRegister} />
        <span>:</span>
        <TimeInput label="시작 시간: 분" pattern={minutePattern} register={fromMinuteRegister} />
      </Div>
      <span>~</span>
      <Div>
        <TimeInput label="종료 시간: 시간" pattern={hourPattern} register={toHourRegister} />
        <span>:</span>
        <TimeInput label="종료 시간: 분" pattern={minutePattern} register={toMinuteRegister} />
      </Div>
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

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: transparent;
`;
