import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface TextInputProps {
  label: string;
  hiddenLabel?: boolean;
  placeholder?: string;
  /**
   * react-hook-form의 useForm으로 받아오는 register함수의 반환값.
   */
  register: UseFormRegisterReturn;
  /**
   * 컴포넌트 레이아웃을 잡을 때 덮어씌울 css. styled-component의 css함수로 생성한 스타일을 넣어주세요.
   */
  css?: FlattenSimpleInterpolation;
}

export function TextInput({ placeholder, label, hiddenLabel, register }: TextInputProps) {
  return (
    <Div>
      <Label className={hiddenLabel ? 'srOnly' : ''} htmlFor={register.name}>
        {label}
      </Label>
      <Input type="text" id={register.name} placeholder={placeholder ?? ''} {...register} />
    </Div>
  );
}

const Div = styled.div``;
const Label = styled.label`
  display: block;
  padding: 6px;
`;
const Input = styled.input`
  display: block;
  width: 260px;
  height: 43px;
  padding: 12px;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);

  &:focus,
  &:active {
    background-color: var(--light-yellow);
  }
`;
