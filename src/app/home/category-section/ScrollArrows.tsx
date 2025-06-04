// app/category-section/scroll-arrows.tsx
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollArrowsProps {
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

export const ScrollArrows = ({ onScrollLeft, onScrollRight }: ScrollArrowsProps) => {
  return (
    <>
      <button
        onClick={onScrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 px-2 bg-background/10 hover:bg-background/90 transition rounded-r-md"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 px-2 bg-background/10 hover:bg-background/90 transition rounded-l-md"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};
