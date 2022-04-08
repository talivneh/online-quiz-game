import React from "react";
//types
import { AnswerObject } from "../App";
//components
import Answer from "./Answer";
import Question from "./Question";
//styles
import {
  StyledAnswerWrapper,
  StyledCard,
  StyledAnswersWrapper,
  StyledQuestionWrapper,
  StyledWrapper,
  StyledQuestInfo,
} from "./styles/QuestionCard.style";
import DifficultyLight from "./DifficultyLight";
//types
import { QuestionState } from "../API";

type Props = {
  question: QuestionState;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <StyledCard>
    <StyledQuestInfo>
      Question Number: {questionNumber} / {totalQuestions}
      <DifficultyLight difficulty={question.difficulty} />
    </StyledQuestInfo>
    <StyledWrapper>
      <StyledQuestionWrapper>
        <Question questionText={question.question} />
      </StyledQuestionWrapper>
      <StyledAnswersWrapper>
        {answers.map((answer) => (
          <StyledAnswerWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <Answer
              answer={answer}
              disabled={!!userAnswer}
              handleClick={callback}
            />
          </StyledAnswerWrapper>
        ))}
      </StyledAnswersWrapper>
    </StyledWrapper>
  </StyledCard>
);

export default QuestionCard;
