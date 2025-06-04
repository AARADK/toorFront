// app/category-section/category-wrapper.tsx
'use client';

import { useRef } from 'react';
import { ScrollArrows } from './ScrollArrows';
import { CategoryCard } from './CategoryCard';
import { categories } from '../../../../data/data';

export const CategoryWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 px-16 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.label}
            label={category.label}
            icon={category.icon}
          />
        ))}
      </div>
      <ScrollArrows
        onScrollLeft={() => scroll('left')}
        onScrollRight={() => scroll('right')}
      />
    </div>
  );
};
