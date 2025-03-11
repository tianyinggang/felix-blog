// src/lib/context/providers.tsx
'use client';

import { ReactNode } from 'react';
import { SectionProvider } from './section';
import { ScrollProvider } from '@/lib/hooks/useScrollListener';
import { ThemeProvider } from 'next-themes'; // 如果您使用 next-themes

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ScrollProvider>
        <SectionProvider>
          {children}
        </SectionProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}