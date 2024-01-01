import { Datetime } from '@/type/Datetime';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface TimeRangeTextProps {
  from: Datetime;
  to: Datetime;
  css?: FlattenSimpleInterpolation;
}

export function TimeRangeText({ css, from, to }: TimeRangeTextProps) {
  const fromHour = from ? from.hour() : '-';
  const fromMinute = from ? from.minute() : '-';
  const toHour = to ? to.hour() : '-';
  const toMinute = to ? to.minute() : '-';

  return (
    <P css={css}>
      <span>{fromHour}</span>
      <span>:</span>
      <span>{fromMinute}</span>
      <span>~</span>
      <span>{toHour}</span>
      <span>:</span>
      <span>{toMinute}</span>
    </P>
  );
}

const P = styled.p<Partial<TimeRangeTextProps>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 236px;
  height: 43px;
  color: var(--black);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ css }) => css}
`;
