// app/category-section/category-card.tsx
'use client';

import { LucideIcon, icons } from 'lucide-react';

interface CategoryCardProps {
  label: string;
  icon: string;
}

export const CategoryCard = ({ label, icon }: CategoryCardProps) => {
  const IconComponent = icons[icon as keyof typeof icons];
  
  if (!IconComponent) {
    console.error(`Icon "${icon}" not found in Lucide icons`);
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition cursor-pointer w-20 min-w-[6rem]">
      <div className="bg-muted rounded-full p-3">
        <IconComponent className="h-8 w-8 text-muted-foreground" />
      </div>
      <span className="text-sm text-center text-muted-foreground">{label}</span>
    </div>
  );
};
