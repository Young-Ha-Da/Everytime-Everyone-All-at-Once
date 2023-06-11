import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  type: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size: 'big' | 'midium' | 'small';
  backgroundColor: string;
  children: ReactNode;
  [key: string]: unknown;
}

export const TextButton = ({
  type,
  onClick,
  size,
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      size={size}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  ${({ size }) => BUTTON_SIZE[size]};
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  border: 1px solid #1d1d1d;
  border-radius: 10px;
`;

const BUTTON_SIZE = {
  big: css`
    width: 80px;
    height: 35px;
    line-height: 35px;
    font-size: var(--text-bs);
    font-weight: var(--text-bold);
  `,
  midium: css`
    width: 68px;
    height: 27px;
    line-height: 27px;
    font-size: var(--text-sm);
    font-weight: var(--text-regular);
  `,
  small: css`
    width: 43px;
    height: 27px;
    line-height: 27px;
    font-size: var(--text-sm);
    font-weight: var(--text-regular);
  `,
};
