"use client";
import { createContext, useState, useLayoutEffect } from 'react';

interface ScrollData {
  x: number;
  y: number;
  lastX: number;
  lastY: number;
}

export default function useScrollListener() {
  const [data, setData] = useState<ScrollData>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  useLayoutEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setData((last) => ({
            x: window.scrollX,
            y: window.scrollY,
            lastX: last.x,
            lastY: last.y,
          }));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return data;
}

export const ScrollContext = createContext<ScrollData | null>(null);
