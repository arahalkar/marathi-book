
import { GoogleGenAI, Type } from "@google/genai";
import { CourseData, Topic, Question, Flashcard } from "../types";

// Always initialize GoogleGenAI using the prescribed pattern and API_KEY environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const PRO_MODEL = 'gemini-3-pro-preview';

/**
 * Step 1: Just extract the list of chapters
 */
export const extractChapters = async (base64Data: string, mimeType: string): Promise<{title: string, topics: {id: string, title: string}[]}> => {
  const prompt = `
    Analyze this Marathi curriculum book. 
    1. Identify the overall title of the book/course.
    2. Extract the Table of Contents or list all major chapters/topics.
    Return ONLY the title and a list of chapter objects with unique IDs and titles.
  `;

  const response = await ai.models.generateContent({
    model: PRO_MODEL,
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          topics: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING }
              },
              required: ["id", "title"]
            }
          }
        },
        required: ["title", "topics"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};

/**
 * Step 2: Process a specific topic on demand
 */
export const processTopicDetail = async (base64Data: string, mimeType: string, topicTitle: string): Promise<Partial<Topic>> => {
  const prompt = `
    Focus ONLY on the chapter/topic titled "${topicTitle}" from this Marathi book.
    1. Provide a one-paragraph summary in English.
    2. Provide a one-paragraph summary in Marathi.
    3. Create 5 practice multiple-choice questions (middle school level) based on this chapter.
    4. Create 5 flashcards for vocabulary or key concepts from this chapter.
    
    STRICT RULE: Use ONLY information from the book relevant to this specific topic.
    STRICT RULE: For the "difficulty" field in questions, use only the lowercase strings "easy", "medium", or "hard".
  `;

  const response = await ai.models.generateContent({
    model: PRO_MODEL,
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summaryEn: { type: Type.STRING },
          summaryMr: { type: Type.STRING },
          practiceQuestions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                text: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctAnswer: { type: Type.INTEGER },
                difficulty: { type: Type.STRING },
                explanation: { type: Type.STRING }
              },
              required: ["id", "text", "options", "correctAnswer", "difficulty"]
            }
          },
          flashcards: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                front: { type: Type.STRING },
                back: { type: Type.STRING }
              },
              required: ["id", "front", "back"]
            }
          }
        },
        required: ["summaryEn", "summaryMr", "practiceQuestions", "flashcards"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};

/**
 * Step 3: Generate the Grand Quiz (25 questions)
 */
export const generateGrandQuiz = async (base64Data: string, mimeType: string): Promise<Question[]> => {
  const prompt = `
    Scan the entire provided Marathi book and generate a "Grand Quiz" of exactly 25 questions.
    Distribute the questions across:
    - EASY: 10 questions
    - MEDIUM: 10 questions
    - HARD: 5 questions
    The questions should span the entire course material.
    STRICT RULE: For the "difficulty" field, use only the lowercase strings "easy", "medium", or "hard".
  `;

  const response = await ai.models.generateContent({
    model: PRO_MODEL,
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            text: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.INTEGER },
            difficulty: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["id", "text", "options", "correctAnswer", "difficulty"]
        }
      }
    }
  });

  return JSON.parse(response.text.trim());
};

/**
 * Step 4: Generate the Grand Flashcards (25 cards)
 */
export const generateGrandFlashcards = async (base64Data: string, mimeType: string): Promise<Flashcard[]> => {
  const prompt = `
    Scan the entire provided Marathi book and generate exactly 25 "Grand Flashcards" 
    covering the most important terms and concepts from all chapters.
  `;

  const response = await ai.models.generateContent({
    model: PRO_MODEL,
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            front: { type: Type.STRING },
            back: { type: Type.STRING }
          },
          required: ["id", "front", "back"]
        }
      }
    }
  });

  return JSON.parse(response.text.trim());
};
