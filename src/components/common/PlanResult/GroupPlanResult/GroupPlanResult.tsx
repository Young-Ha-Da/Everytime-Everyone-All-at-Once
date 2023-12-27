import styled from 'styled-components';

import { GroupDataItem } from '@/components/common/GroupPlanCandidateList';

import { getTimeFromDateString } from '@/utils';

export interface GroupPlanResultProps {
  result: GroupDataItem;
}

export const GroupPlanResult = ({ result }: GroupPlanResultProps) => {
  const { schedule } = result;

  return (
    <List>
      {schedule.map(({ group, from, to }) => (
        <Item>
          <Title>{group.name}</Title>
          <SubTitle>{`${getTimeFromDateString(from)}-${getTimeFromDateString(to)}`}</SubTitle>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9px;
  background: var(--light-purple);
  border: 1px solid var(--black);
  border-radius: var(--radius-bs);
`;

const Title = styled.div`
  font-weight: var(--text-bold);
`;

const SubTitle = styled.div`
  font-size: var(--text-sm);
`;
