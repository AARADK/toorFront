'use client';

import { Button } from "@/components/ui/button"

interface DealCardProps {
  title: string
  description: string
  buttonText: string
  onClick: () => void
}

const DealCard = ({ title, description, buttonText, onClick }: DealCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <button
        onClick={onClick}
        className="bg-[#2D3363] text-white px-4 py-2 rounded-md hover:bg-[#16173d] transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default DealCard
