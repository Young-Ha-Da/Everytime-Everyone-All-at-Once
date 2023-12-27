import styled from 'styled-components';

import { SingleDataItem } from '@/components/common/SinglePlanCandidateList';

import { getFormattedTimeFromDateString } from '@/utils';

export interface SinglePlanResultProps {
  result: SingleDataItem;
}

export const SinglePlanResult = ({ result }: SinglePlanResultProps) => {
  const { time } = result;
  const formattedTime = getFormattedTimeFromDateString(time);

  return <Wrapper>{formattedTime}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: var(--text-md);
  font-weight: var(--text-bold);
`;
