import Image from 'next/image';
import React, { useEffect, useId, useState } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface DropdownProps {
  previewText: string;
  css?: FlattenSimpleInterpolation;
  children: React.ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
  const { previewText, children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement) || e.target.closest(`[data-id="${dropdownId}"]`))
        return;
      setIsOpen(false);
    };

    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, [isOpen]);

  return (
    <$Container data-id={dropdownId}>
      <$DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        <span>{previewText}</span>
        <Image src="public/svgs/caret-down-solid.svg" alt="" width={12} height={12} />
      </$DropdownButton>
      {isOpen && <$ListContainer>{children}</$ListContainer>}
    </$Container>
  );
};

export interface ItemGroupProps {
  children: React.ReactNode;
}
const ItemGroup = (props: ItemGroupProps) => {
  const { children } = props;
  return <$ItemGroup>{children}</$ItemGroup>;
};

export interface ItemProps {
  children: React.ReactNode;
}
const Item = (props: ItemProps) => {
  const { children } = props;
  return <$Item>{children}</$Item>;
};

const $Container = styled.div<Partial<DropdownProps>>`
  width: 260px;
  ${({ css }) => css}
`;

const $DropdownButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: var(--space-sm);
  font-size: var(--text-bs);
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);

  & > img {
    width: 12.5px;
    height: 20px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: all 100ms;
  }
`;

const $ListContainer = styled.div`
  margin-top: var(--space-sm);
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
  overflow: hidden;
`;

const $ItemGroup = styled.ol`
  width: 100%;
  &:not(:first-child) {
    border-top: 1px solid var(--black);
  }
`;

const $Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  color: var(--black);
  font-size: var(--text-bs);

  &:hover {
    background-color: var(--light-yellow);
  }
`;

Dropdown.ItemGroup = ItemGroup;
Dropdown.Item = Item;
