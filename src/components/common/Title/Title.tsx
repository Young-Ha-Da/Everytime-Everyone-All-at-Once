import { ReactNode } from 'react';
import styled from 'styled-components';

export interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  [key: string]: unknown;
}

export const Title = ({ tag = 'h1', children, ...props }: TitleProps) => {
  return (
    <StyledTitle as={tag} {...props}>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  font-size: var(--text-lg);
  font-weight: 700;
`;
