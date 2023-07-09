import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckedBoxIcon } from '@/assets/square-check-solid.svg';
import { ReactComponent as UncheckedBoxIcon } from '@/assets/square-regular.svg';

export interface Option {
  title: string;
  href: string;
  selected?: boolean;
}
export interface PlanListProps {
  options: Option[];
  setOptions: Dispatch<SetStateAction<Option[]>>;
  withSelectBox: boolean;
}

export const PlanList = ({ options, withSelectBox, setOptions }: PlanListProps) => {
  const updateOptionsOf = (i: number, selected: boolean) => {
    const newOptions = options.map((option, _i) => {
      return i !== _i ? option : { ...option, selected };
    });
    setOptions(newOptions);
  };

  return withSelectBox ? (
    <PlanListWrapper>
      {options.map(({ title, href, selected }, i) => (
        <PlanItemWrapper key={`${title}-${href}`}>
          <CheckboxIconWrapper>
            <InputCheckbox
              id={title}
              type="checkbox"
              checked={selected}
              onChange={(e) => {
                const selected = e.target.checked;
                updateOptionsOf(i, selected);
              }}
            />
            <label htmlFor={title}>
              {selected ? (
                <CheckedBoxIcon
                  width={20}
                  height={20}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              ) : (
                <UncheckedBoxIcon
                  width={20}
                  height={20}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              )}
            </label>
          </CheckboxIconWrapper>
          <PlanItemContent as="button" type="button" onClick={() => updateOptionsOf(i, !selected)}>
            {title}
          </PlanItemContent>
        </PlanItemWrapper>
      ))}
    </PlanListWrapper>
  ) : (
    <PlanListWrapper>
      {options.map(({ title, href }) => (
        <PlanItemWrapper key={`${title}-${href}`}>
          <PlanItemContent href={href}>{title}</PlanItemContent>
        </PlanItemWrapper>
      ))}
    </PlanListWrapper>
  );
};

const PlanListWrapper = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-md);
`;

const PlanItemWrapper = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: var(--space-md);
`;

const PlanItemContent = styled(Link)`
  height: 43px;
  line-height: 43px;
  display: block;
  flex-grow: 1;
  border-radius: var(--radius-bs);
  background-color: var(--yellow);
  text-align: center;
  font-size: 16px;
`;

const CheckboxIconWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

const InputCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
