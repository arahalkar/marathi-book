
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizGameProps {
  questions: Question[];
  onComplete: (score: number) => void;
  title: string;
}

const QuizGame: React.FC<QuizGameProps> = ({ questions, onComplete, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  // Fixed the handleNext function to correctly complete the quiz with the final score
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs uppercase font-bold px-2 py-0.5 rounded ${
            currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
            currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            {currentQuestion.difficulty}
          </span>
        </div>
        <p className="text-xl text-gray-800 marathi-font leading-relaxed">
          {currentQuestion.text}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, idx) => {
          let bgColor = 'bg-gray-50 border-gray-100';
          let textColor = 'text-gray-700';
          
          if (isAnswered) {
            if (idx === currentQuestion.correctAnswer) {
              bgColor = 'bg-green-100 border-green-300';
              textColor = 'text-green-700';
            } else if (idx === selectedOption) {
              bgColor = 'bg-red-100 border-red-300';
              textColor = 'text-red-700';
            }
          } else if (idx === selectedOption) {
            bgColor = 'bg-orange-100 border-orange-300';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgColor} ${textColor} hover:border-orange-300 marathi-font`}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border font-bold text-sm">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </div>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="animate-fade-in">
          {currentQuestion.explanation && (
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded mb-6">
              <p className="text-sm text-blue-700 marathi-font">
                <i className="fas fa-info-circle mr-2"></i>
                {currentQuestion.explanation}
              </p>
            </div>
          )}
          <button
            onClick={handleNext}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02]"
          >
            {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
