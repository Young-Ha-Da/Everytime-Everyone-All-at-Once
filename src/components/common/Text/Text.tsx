import { ReactNode } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface TextProps {
  css: FlattenSimpleInterpolation;
  children: string;
}

export function Text({ css, children }: TextProps) {
  return <P css={css}>{children}</P>;
}

const P = styled.p`
  width: 260px;
  height: 43px;
  padding: 12px;
  color: var(--black);
  background-color: var(--light-yellow);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
`;
