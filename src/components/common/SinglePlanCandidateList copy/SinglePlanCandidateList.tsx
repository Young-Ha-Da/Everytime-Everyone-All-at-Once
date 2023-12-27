import { useState } from 'react';
import styled, { css } from 'styled-components';

import { TextButton } from '../TextButton';

interface SingleDataItem {
  id: string;
  time: string;
  members: string[];
}

export interface SinglePlanCandidateListProps {
  singleResult: SingleDataItem[];
  onConfirm?: (planId: string) => void;
}

export const SinglePlanCandidateList = ({
  singleResult,
  onConfirm,
}: SinglePlanCandidateListProps) => {
  const [detailVisibleList, setDetailVisibleList] = useState(
    Array.from({ length: singleResult.length }, () => false)
  );

  return (
    <ListWrapper>
      {singleResult.map(({ time, members, id }, i) => {
        const [year, month, day, hour, minute] = time.replace(/[-:]/g, ' ').split(' ');
        const detailVisible = detailVisibleList[i];

        const formattedTime = `${year}.${month}.${day} 오전 ${hour}:${minute}`;

        return (
          <ItemWrapper isFirst={i === 0}>
            <Title
              className="single-plan-result-title"
              onClick={() => {
                const newDetailVisibleList = detailVisibleList.map((v, idx) =>
                  idx === i ? !v : v
                );
                setDetailVisibleList(newDetailVisibleList);
              }}
            >{`${i + 1}위 ${formattedTime}`}</Title>
            {detailVisible && (
              <Detail className="single-plan-result-detail">
                <DetailList>
                  {members.map((member, j) => (
                    <DetailItem isEven={j % 2 === 0}>{member}</DetailItem>
                  ))}
                </DetailList>
                <TextButton
                  size="small"
                  backgroundColor="var(--light-yellow)"
                  onClick={() => {
                    onConfirm?.(id);
                  }}
                  type="button"
                >
                  확정
                </TextButton>
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
      .single-plan-result-title {
        font-weight: var(--text-bold);
        background: var(--yellow);
      }

      .single-plan-result-detail {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 0 6px;
  border-radius: var(--radius-bs);
  background: var(--light-yellow);
`;

const DetailList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const DetailItem = styled.div<{ isEven: boolean }>`
  width: 50%;
  height: 30px;
  text-align: center;

  ${({ isEven }) =>
    isEven &&
    css`
      border-right: 1px solid var(--black);
    `}
`;
