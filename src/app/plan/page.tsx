'use client';

import { Title } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <Title>약속 목록 페이지</Title>
      <Link style={{ display: 'block' }} href={'/plan/new'}>
        약속 생성
      </Link>
      <Link style={{ display: 'block' }} href={'/plan/1'}>
        약속 1
      </Link>
      <Link style={{ display: 'block' }} href={'/plan/2'}>
        약속 2
      </Link>
      <Link style={{ display: 'block' }} href={'/plan/3'}>
        약속 3
      </Link>
    </main>
  );
}
