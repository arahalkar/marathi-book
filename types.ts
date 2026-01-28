
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
  explanation?: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface Topic {
  id: string;
  title: string;
  summaryEn?: string;
  summaryMr?: string;
  practiceQuestions?: Question[];
  flashcards?: Flashcard[];
  isLoaded?: boolean;
}

export interface CourseData {
  title: string;
  topics: Topic[];
  grandQuiz?: Question[];
  grandFlashcards?: Flashcard[];
}

export type AppView = 'upload' | 'dashboard' | 'topic' | 'grand-quiz' | 'grand-flashcards';
