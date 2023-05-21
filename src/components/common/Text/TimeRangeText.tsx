import styled, { FlattenSimpleInterpolation } from 'styled-components';

export interface TimeRangeTextProps {
  fromHour: string | number;
  fromMinute: string | number;
  toHour: string | number;
  toMinute: string | number;
  css?: FlattenSimpleInterpolation;
}

export function TimeRangeText({ css, fromHour, fromMinute, toHour, toMinute }: TimeRangeTextProps) {
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
