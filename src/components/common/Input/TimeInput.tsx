import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface TimeInputProps {
  /**
   * react-hook-form의 useForm으로 받아오는 register함수의 반환값.
   */
  hourRegister: UseFormRegisterReturn;
  /**
   * react-hook-form의 useForm으로 받아오는 register함수의 반환값.
   */
  minuteRegister: UseFormRegisterReturn;
  /**
   * 컴포넌트 레이아웃을 잡을 때 덮어씌울 css. styled-component의 css함수로 생성한 스타일을 넣어주세요.
   */
  css?: FlattenSimpleInterpolation;
}

export const TimeInput = ({ hourRegister, minuteRegister, css }: TimeInputProps) => {
  return (
    // props으로 받아온 css를 넘겨줘야 하는데 타입 지정 안해주면 에러남
    <Container css={css}>
      <InputBox>
        <Input
          id={hourRegister.name}
          type="text"
          inputMode="numeric"
          pattern="^(0?[0-9]|1[0-9]|2[0-3])$"
          placeholder="00"
          autoComplete="off"
          maxLength={2}
          {...hourRegister}
        />
        <Label htmlFor={hourRegister.name}>시간</Label>
      </InputBox>
      <InputBox>
        <Input
          id={minuteRegister.name}
          type="text"
          inputMode="numeric"
          pattern="^([0-9]|[1-5][0-9])$"
          placeholder="00"
          autoComplete="off"
          maxLength={2}
          {...minuteRegister}
        />
        <Label htmlFor={minuteRegister.name}>분</Label>
      </InputBox>
    </Container>
  );
};

const Container = styled.div<Partial<TimeInputProps>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: 44px;
  padding: 12px 36px;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
  ${({ css }) => css}

  &:has(*:focus) {
    background-color: #fff9eb;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: transparent;
`;
const Input = styled.input`
  width: 30px;
  padding: 12px 0;
  text-align: left;
  background-color: transparent;
`;
const Label = styled.label``;

// 1. 스타일드 컴포넌트 인터페이스 만들고 그거를 확장

// interface Container {
//   css?: FlattenSimpleInterpolation;
// }

// interface TimeInputProps extends Container {
//   hourRegister: UseFormRegisterReturn;
//   minuteRegister: UseFormRegisterReturn;
// }

// 2. 컴포넌트 props 인터페이스를 Partial로 사용

// interface TimeInputProps {
//   hourRegister: UseFormRegisterReturn;
//   minuteRegister: UseFormRegisterReturn;
//   css?: FlattenSimpleInterpolation;
// }

// type Container = Partial<TimeInputProps>;
