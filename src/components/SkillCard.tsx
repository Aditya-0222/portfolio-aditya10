import React, { useState } from 'react';

interface SkillCardProps {
  skill: string;
  description: string;
}

export function SkillCard({ skill, description }: SkillCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-32 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full bg-gray-700 rounded-lg p-4 text-center flex items-center justify-center backface-hidden hover:bg-gray-600 transition-colors">
          <span className="text-lg font-semibold">{skill}</span>
        </div>
        <div className="absolute w-full h-full bg-blue-600 rounded-lg p-4 text-center flex items-center justify-center backface-hidden rotate-y-180">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}