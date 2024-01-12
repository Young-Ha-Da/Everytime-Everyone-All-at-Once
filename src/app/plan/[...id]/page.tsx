'use client';

import { Title } from '@/components';
import { useState } from 'react';

export default function Home() {
  return (
    <main>
      <Title>약속 상세 페이지</Title>
      {/* 여기서는 result / vote / info 중 디폴트 페이지 결정되면 거기로 바로 이동만 시켜줌
      result / vote / info 내부에서는 약속 타입에 따라 각각의 컴포넌트로 분기 처리 */}
    </main>
  );
}
