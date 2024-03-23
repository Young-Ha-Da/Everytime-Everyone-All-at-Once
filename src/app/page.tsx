'use client';

import { TimeInput, TimeRangeInput, Title } from '@/components';
import { Calendar } from '@/components/common/Calendar';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [from, setFrom] = useState(dayjs());
  const [to, setTo] = useState(dayjs());

  return (
    <main>
      <Title>메인 페이지</Title>
      <Link href={'/plan'}>로그인</Link>
      <TimeRangeInput
        label={'TimeRangeInput'}
        from={from}
        onChangeFrom={setFrom}
        to={to}
        onChangeTo={setTo}
      />
      <TimeInput label="TimeInput" value={from} onChange={setFrom} />
      <Calendar onClickDate={console.log} />
    </main>
  );
}
