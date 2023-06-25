import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ReactNode, useState } from 'react';

interface OptionProps {
  href: string;
  iconComponent: ReactNode;
  text: string;
  selected: boolean;
}

export interface NavProps {
  navList: OptionProps[];
}

export const NavigationBar = ({ navList }: NavProps) => {
  const _selectedIdx = navList.findIndex(({ selected }) => selected) ?? 0;
  const [selectedIdx, setSelectedIdx] = useState<Number>(_selectedIdx);
  return (
    <LinkGroup>
      {navList.map(({ href, iconComponent: Icon, text }, idx) => (
        <li>
          <LinkItem
            onClick={() => {
              setSelectedIdx(idx);
            }}
            selected={selectedIdx === idx}
            href={href}
          >
            {Icon}
            <div>{text}</div>
          </LinkItem>
        </li>
      ))}
    </LinkGroup>
  );
};

const LinkGroup = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 320px;
  height: 60px;
  padding-top: 5px;
  background: var(--green);
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
`;

const LinkItem = styled(Link)<Partial<OptionProps>>`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 60px;
  height: 40px;
  border-radius: var(--radius-bs);
  color: var(--white);
  svg {
    fill: var(--white);
  }
  div {
    font-size: var(--text-xs);
  }

  ${({ selected }) =>
    selected &&
    css`
      background: var(--yellow);
      border: 1px solid var(--black);
      color: var(--black);
      svg {
        fill: var(--black);
      }
    `}
`;
