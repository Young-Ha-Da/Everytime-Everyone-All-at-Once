'use client';

import { Title } from '@/components';
import { useState } from 'react';

export default function Home() {
  const planType = '날짜 | 시간 | 그룹'; // 상태 또는 쿼리 등으로 가져옴
  return (
    <main>
      <Title>약속 투표 페이지</Title>
      {/* planType에 따라 컨테이너 컴포넌트 분기 처리 */}
      {/* <Navigation /> */}
    </main>
  );
}
