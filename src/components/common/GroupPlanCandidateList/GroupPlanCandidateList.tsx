import { useState } from 'react';
import styled, { css } from 'styled-components';

import { TextButton } from '../TextButton';

import { totalMembers } from '@/utils/mock';

interface Group {
  name: string;
  members: string[];
}

interface ScheduleItem {
  from: string;
  to: string;
  group: Group;
}

export interface GroupDataItem {
  id: string;
  schedule: ScheduleItem[];
}

export interface GroupPlanCandidateListProps {
  groupResult: GroupDataItem[];
  onConfirm?: (planId: string) => void;
}

export const GroupPlanCandidateList = ({ groupResult, onConfirm }: GroupPlanCandidateListProps) => {
  const [detailVisibleList, setDetailVisibleList] = useState(
    Array.from({ length: groupResult.length }, () => false)
  );

  return (
    <ListWrapper>
      {groupResult.map(({ id, schedule }, i) => {
        const groups = [...new Set(schedule.map((item) => item.group.name))];
        const members = [...new Set(schedule.map((item) => item.group.members).flat())];
        const detailVisible = detailVisibleList[i];

        const formattedText = `${i + 1}위 ${groups.length}팀 ${members.length}/${
          totalMembers.length
        }명 참여`;

        return (
          <ItemWrapper isFirst={i === 0}>
            <Title
              className="group-plan-result-title"
              onClick={() => {
                const newDetailVisibleList = detailVisibleList.map((v, idx) =>
                  idx === i ? !v : v
                );
                setDetailVisibleList(newDetailVisibleList);
              }}
            >
              {formattedText}
            </Title>
            {detailVisible && (
              <Detail className="group-plan-result-detail">
                {schedule.map(({ from, to, group }, j) => {
                  const formattedTimeRange = `${from.slice(11, 16)} - ${to.slice(11, 16)}`;

                  return (
                    <DetailItem isFirst={j === 0}>
                      <div>{group.name}</div>
                      <DetailTimeRange>{formattedTimeRange}</DetailTimeRange>
                    </DetailItem>
                  );
                })}
                <ConfirmBtn
                  size="small"
                  backgroundColor="var(--light-yellow)"
                  onClick={() => {
                    onConfirm?.(id);
                  }}
                  type="button"
                >
                  확정
                </ConfirmBtn>
              </Detail>
            )}
          </ItemWrapper>
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ItemWrapper = styled.div<{ isFirst: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 9px;

  ${({ isFirst }) =>
    isFirst &&
    css`
      .group-plan-result-title {
        font-weight: var(--text-bold);
        background: var(--yellow);
      }

      .group-plan-result-detail {
        background: var(--yellow);
      }
    `}
`;

const Title = styled.div`
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  border-radius: var(--radius-bs);
  background: var(--light-yellow);
  white-space: pre-wrap;
  text-align: center;
  cursor: pointer;
`;

const Detail = styled.div`
  position: relative;
  padding: 12px 30px 6px;
  border-radius: var(--radius-bs);
  background: var(--light-yellow);
`;

const DetailItem = styled.div<{ isFirst: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 0;

  ${({ isFirst }) =>
    !isFirst &&
    css`
      border-top: 1px solid var(--black);
    `}
`;

const DetailTimeRange = styled.div`
  font-size: var(--text-sm);
`;

const ConfirmBtn = styled(TextButton)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
