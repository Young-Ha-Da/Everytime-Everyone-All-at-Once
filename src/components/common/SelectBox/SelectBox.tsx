import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

// option에 대한 타입은 임시로 설정함. 변경될 수 있음
export interface Option {
  id: string | number;
  value: string;
  isSelected: boolean;
}

export interface OptionWithGroup extends Option {
  group: string;
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

export interface SelectBoxProps {
  options: Array<Option>;
  toggleOption: (value: string) => void;
  deselectOption: (value: string) => void;
  toggleAll: () => void;
  placeholder: string;
  /**
   * 컴포넌트 레이아웃을 잡을 때 덮어씌울 css. styled-component의 css함수로 생성한 스타일을 넣어주세요.
   */
  css?: FlattenSimpleInterpolation;
}

export const SelectBox = ({
  options,
  placeholder,
  deselectOption,
  toggleOption,
  toggleAll,
  css,
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const selectedOptions = options.filter((option) => option.isSelected);

  const Options = ({
    options,
    placeholder,
    toggleOption,
    toggleAll,
  }: {
    options: Array<Option>;
    toggleOption: (value: string) => void;
    toggleAll: () => void;
    placeholder: string;
  }) => (
    <$OptionContainer>
      <$Placeholder>{placeholder}</$Placeholder>
      <$OptionList>
        {options?.map((option) => (
          <$Option
            key={option.id}
            role="option"
            aria-selected={option.isSelected}
            onClick={() => toggleOption(option.value)}
          >
            {option.value}
          </$Option>
        ))}
      </$OptionList>
      <$toggleAllButton onClick={toggleAll}>전체 선택/해제</$toggleAllButton>
    </$OptionContainer>
  );

  return (
    <$Container css={css}>
      <Select
        selectedOptions={selectedOptions}
        deselectOption={deselectOption}
        placeholder={placeholder}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Options
          options={options}
          toggleOption={toggleOption}
          toggleAll={toggleAll}
          placeholder={placeholder}
        />
      )}
    </$Container>
  );
};

export interface GroupSelectBoxProps extends SelectBoxProps {
  options: Array<OptionWithGroup>;
  toggleGroup: (groupId: string) => void;
}

export const GroupSelectBox = ({
  options,
  placeholder,
  deselectOption,
  toggleOption,
  toggleGroup,
  toggleAll,
  css,
}: GroupSelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const selectedOptions = options.filter((option) => option.isSelected);

  const Options = ({
    options,
    toggleOption,
    toggleGroup,
    toggleAll,
  }: {
    options: Array<OptionWithGroup>;
    toggleOption: (value: string) => void;
    toggleGroup: (group: string) => void;
    toggleAll: () => void;
  }) => {
    const [currentGroup, setCurrentGroup] = useState('');

    const groups = [...new Set(options.map((option) => option.group))];
    const currentOptions = options.filter((option) => option.group === currentGroup);

    useEffect(() => {
      setCurrentGroup(options[0]?.group ?? '');
    }, [options]);

    return (
      <$OptionContainer>
        <$GroupList>
          {groups.map((group) => (
            <$GroupItem
              key={group}
              aria-selected={group === currentGroup}
              onClick={() => setCurrentGroup(group)}
            >
              {group}
            </$GroupItem>
          ))}
        </$GroupList>
        <$GroupOptionBox>
          <$GroupOptionList>
            {currentOptions.map((option) => (
              <$Option
                key={option.id}
                role="option"
                aria-selected={option.isSelected}
                onClick={() => toggleOption(option.value)}
              >
                {option.value}
              </$Option>
            ))}
          </$GroupOptionList>
          <$toggleAllButton onClick={() => toggleGroup(currentGroup)}>
            멤버 전체 선택/해제
          </$toggleAllButton>
        </$GroupOptionBox>
        <$toggleAllButton onClick={toggleAll}>전체 선택/해제</$toggleAllButton>
      </$OptionContainer>
    );
  };

  return (
    <$Container css={css}>
      <Select
        selectedOptions={selectedOptions}
        deselectOption={deselectOption}
        placeholder={placeholder}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <Options
          options={options}
          toggleOption={toggleOption}
          toggleGroup={toggleGroup}
          toggleAll={toggleAll}
        />
      )}
    </$Container>
  );
};

const $Container = styled.div<Partial<SelectBoxProps>>`
  ${({ css }) => css}
`;

const $Placeholder = styled.span`
  display: block;
  width: 100%;
  padding: 5px;
  color: #afafaf;
  text-align: center;
`;

const $OptionContainer = styled.div`
  margin-top: var(--space-sm);
  display: flex;
  flex-flow: row wrap;
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
  &[aria-selected='true'] {
    background-color: var(--yellow);
  }
`;

const $GroupList = styled.ul`
  display: inline-block;
  width: 40%;
  height: 120px;
`;

const $GroupItem = styled($Option)`
  padding-left: 0;

  &:nth-child(1) {
    border-radius: var(--radius-bs) 0 0 0;
  }
  &[aria-selected='true'] {
    background-color: var(--light-yellow);
  }
`;

const $GroupOptionBox = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 60%;
  border-left: 1px solid var(--black);
`;

const $GroupOptionList = styled($OptionList)`
  max-height: 120px;
`;

const $toggleAllButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  font-size: var(--text-bs);
  border-top: 1px solid var(--black);
`;
