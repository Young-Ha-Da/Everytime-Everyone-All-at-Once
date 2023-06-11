import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export interface ToastProps {
  status: 'success' | 'fail';
  direction?: 'top' | 'bottom';
  children: ReactNode;
  [key: string]: unknown;
}

export const Toast = ({ status, direction = 'top', children, ...props }: ToastProps) => {
  return (
    <StyledDiv status={status} direction={direction} {...props}>
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<ToastProps>`
  ${({ status }) => TOAST_COLOR[status]}
  ${({ direction }) => TOAST_ANIMATION[direction ?? 'top']}
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-toast);
  font-weight: var(--text-bold);
  white-space: pre-line;
  text-align: center;
`;

const TOAST_COLOR = {
  success: css`
    background-color: var(--light-green);
  `,
  fail: css`
    background-color: var(--light-red);
  `,
};

const TOAST_ANIMATION = {
  top: css`
    top: 0;
    @keyframes top {
      0% {
        transform: translate3D(0, -150%, 0);
      }
      15%,
      85% {
        transform: translate3D(0, 0, 0);
      }
      100% {
        transform: translate3D(0, -150%, 0);
      }
    }
    animation: top 3.5s both;
  `,
  bottom: css`
    bottom: 0;
    @keyframes bottom {
      0% {
        transform: translate3D(0, 150%, 0);
      }
      15%,
      85% {
        transform: translate3D(0, 0, 0);
      }
      100% {
        transform: translate3D(0, 150%, 0);
      }
    }
    animation: bottom 3.5s both;
  `,
};
