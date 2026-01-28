
import React, { useState } from 'react';
import { Flashcard } from '../types';

interface FlashcardItemProps {
  card: Flashcard;
}

const FlashcardItem: React.FC<FlashcardItemProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative w-full h-64 cursor-pointer perspective-1000 ${isFlipped ? 'flashcard-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flashcard-inner relative w-full h-full duration-500 shadow-lg rounded-2xl">
        {/* Front */}
        <div className="flashcard-front absolute inset-0 w-full h-full flex items-center justify-center p-8 bg-white border-2 border-orange-100 rounded-2xl">
          <p className="text-2xl font-semibold text-gray-800 text-center marathi-font">
            {card.front}
          </p>
          <div className="absolute bottom-4 right-4 text-orange-400">
            <i className="fas fa-sync-alt"></i>
          </div>
        </div>
        
        {/* Back */}
        <div className="flashcard-back absolute inset-0 w-full h-full flex items-center justify-center p-8 bg-orange-50 border-2 border-orange-200 rounded-2xl">
          <p className="text-xl text-gray-700 text-center marathi-font">
            {card.back}
          </p>
          <div className="absolute bottom-4 right-4 text-orange-400">
            <i className="fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardItem;
