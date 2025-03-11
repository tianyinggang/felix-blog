'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 定义 Context 类型
interface SectionContextType {
  currentSection: string;
  onSectionChange: (val: string) => void;
}

// 创建 Context，避免组件未包裹 Provider 时出错
const SectionContext = createContext<SectionContextType | undefined>(undefined);

// Provider 组件
export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>('');

  // 监听滚动，根据滚动位置更新 currentSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let newSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newSection = section.getAttribute('data-section') || '';
        }
      });

      if (newSection && newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <SectionContext.Provider value={{ currentSection, onSectionChange: setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Hook 用于在组件中获取 context
export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
