import styled, { css } from 'styled-components';

import { GroupPlanResult } from './GroupPlanResult';
import { SinglePlanResult } from './SinglePlanResult';
import { ReactComponent as CloneIcon } from '@/assets/clone-regular.svg';

import { SingleDataItem } from '@/components/common/SinglePlanCandidateList';
import { GroupDataItem } from '@/components/common/GroupPlanCandidateList';
import { getFormattedTimeFromDateString } from '@/utils';

export interface PlanResultProps {
  isSinglePlanResult: boolean;
  result: GroupDataItem | SingleDataItem;
}

export const PlanResult = ({ isSinglePlanResult, result }: PlanResultProps) => {
  const handleCopy = () => {
    if (!isSinglePlanResult) return;
    const { time } = result as SingleDataItem;
    const formattedTime = getFormattedTimeFromDateString(time);

    navigator.clipboard.writeText(formattedTime);
  };

  return (
    <Wrapper>
      <Title>약속이 확정되었습니다!</Title>
      <Content isSinglePlanResult={isSinglePlanResult} onClick={handleCopy}>
        {isSinglePlanResult ? (
          <SinglePlanResult result={result as SingleDataItem} />
        ) : (
          <GroupPlanResult result={result as GroupDataItem} />
        )}
        {isSinglePlanResult && <CloneIcon />}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.div`
  padding: 12px 0;
  font-weight: var(--text-semi-bold);
  text-align: center;
`;

const Content = styled.div<{ isSinglePlanResult: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border: 1px dashed var(--black);
  border-radius: var(--radius-bs);

  ${({ isSinglePlanResult }) =>
    isSinglePlanResult
      ? css`
          padding: 12px 0;
          cursor: pointer;
        `
      : css`
          padding: 30px;
        `}

  svg {
    width: 20px;
    height: 20px;
  }
`;
