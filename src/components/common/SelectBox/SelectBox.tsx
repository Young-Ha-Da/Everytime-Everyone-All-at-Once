import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// option에 대한 타입은 임시로 설정함. 변경될 수 있음
export interface Option {
  id: string | number;
  value: string;
  isSelected: boolean;
}

interface SelectProps {
  selectedOptions: Array<Option>;
  deselectOption: (value: string) => void;
  placeholder: string;
  isOpen: boolean;
  onClick: () => void;
}

const Select = ({ selectedOptions, deselectOption, placeholder, isOpen, onClick }: SelectProps) => {
  const selectedOption = selectedOptions[0];

  return (
    <$Select role="button" aria-expanded={isOpen} aria-haspopup="listbox" onClick={onClick}>
      {selectedOption ? (
        <$SelectedOptionList>
          <$SelectedOption>
            <span>{selectedOption.value}</span>
            <$deselectButton
              onClick={(e) => {
                e.stopPropagation();
                deselectOption(selectedOption.value);
              }}
            >
              <Image src="public/svgs/xmark-solid.svg" alt="" width={12} height={12} />
            </$deselectButton>
          </$SelectedOption>
          {selectedOptions.length > 1 && (
            <$EllipsisBox>
              <Image src="public/svgs/xmark-solid.svg" alt="" width={12} height={12} />
              {selectedOptions.length - 1}
            </$EllipsisBox>
          )}
        </$SelectedOptionList>
      ) : (
        <$Placeholder>{placeholder}</$Placeholder>
      )}
      <Image width={12.5} height={20} src="public/svgs/caret-down-solid.svg" alt="" />
    </$Select>
  );
};

export interface SelectBoxProps {
  options: Array<Option>;
  toggleOption: (value: string) => void;
  deselectOption: (value: string) => void;
  toggleAll: () => void;
  placeholder: string;
}

export const SelectBox = ({
  options,
  placeholder,
  toggleOption,
  deselectOption,
  toggleAll,
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const selectedOptions = options.filter((option) => option.isSelected);

  const Options = ({
    options,
    placeholder,
    toggleOption,
  }: {
    options: Array<Option>;
    toggleOption: (value: string) => void;
    placeholder: string;
  }) => (
    <$OptionBox>
      <$Placeholder>{placeholder}</$Placeholder>
      <$OptionList>
        {options?.map((option) => (
          <$Option key={option.id} onClick={() => toggleOption(option.value)}>
            {option.value}
          </$Option>
        ))}
      </$OptionList>
      <$SelectAllButton onClick={toggleAll}>전체 선택/해제</$SelectAllButton>
    </$OptionBox>
  );

  return (
    <div>
      <Select
        selectedOptions={selectedOptions}
        deselectOption={deselectOption}
        placeholder={placeholder}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Options options={options} toggleOption={toggleOption} placeholder={placeholder} />
      )}
    </div>
  );
};

const $Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 44px;
  padding: 12px;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);

  &[aria-expanded='true'] > img {
    transform: rotate(180deg);
  }
`;

const $SelectedOptionList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;
  overflow: hidden;
  width: 160px;
`;

const $SelectedOption = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 80px;
  height: 27px;
  padding: 0 8px;
  font-size: 14px;
  background: var(--yellow);
  border: 1px solid var(--black);
  border-radius: var(--radius-md);
`;

const $deselectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
`;

const $EllipsisBox = styled.li`
  display: flex;
  align-items: baseline;
  & img {
    transform: rotate(45deg);
  }
`;

const $Placeholder = styled.span`
  display: block;
  width: 100%;
  padding: 5px;
  color: #afafaf;
  text-align: center;
`;

const $OptionBox = styled.div`
  margin-top: var(--space-sm);
  width: 230px;
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
`;

const $OptionList = styled.ul`
  position: relative;
  width: 100%;
  max-height: 120px;
  padding: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: var(--radius-md);
  }
`;

const $Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  padding-left: 10px;
  transition: all 200ms;

  &:hover {
    background-color: var(--light-yellow);
  }
`;

const $SelectAllButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  font-size: var(--text-bs);
  border-top: 1px solid var(--black);
`;
