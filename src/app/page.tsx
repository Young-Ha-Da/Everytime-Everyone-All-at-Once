'use client';

import { TimeRangeInput, Title } from '@/components';
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
    </main>
  );
}
