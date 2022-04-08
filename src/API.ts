import { shuffleAnswers } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (difficulty: string[]) => {
  const endpoint = `https://opentdb.com/api.php?amount=100`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
  return data.results
    .map((question: Question) => ({
      ...question,
      answers: shuffleAnswers([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }))
    .filter(
      (question: Question) =>
        difficulty.includes(question.difficulty) || difficulty.length === 0
    );
};
