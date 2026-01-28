
import { Topic, Question, Flashcard } from "../types";

/**
 * AI Services are disabled in static mode.
 * These functions are kept as stubs to prevent App.tsx from breaking.
 */

export const extractChapters = async (_base64Data: string, _mimeType: string): Promise<{title: string, topics: {id: string, title: string}[]}> => {
  console.warn("AI extraction is disabled in static mode.");
  return { title: "Static Course", topics: [] };
};

export const processTopicDetail = async (_base64Data: string, _mimeType: string, _topicTitle: string): Promise<Partial<Topic>> => {
  console.warn("AI topic generation is disabled in static mode.");
  return {};
};

export const generateGrandQuiz = async (_base64Data: string, _mimeType: string): Promise<Question[]> => {
  console.warn("AI quiz generation is disabled in static mode.");
  return [];
};

export const generateGrandFlashcards = async (_base64Data: string, _mimeType: string): Promise<Flashcard[]> => {
  console.warn("AI flashcard generation is disabled in static mode.");
  return [];
};
