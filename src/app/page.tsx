'use client';

import { Title } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <Title>메인 페이지</Title>
      <Link href={'/plan'}>로그인</Link>
    </main>
  );
}
