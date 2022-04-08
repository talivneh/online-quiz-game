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
  StyledQuestNum,
} from "./styles/QuestionCard.style";

type Props = {
  question: string;
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
    <StyledQuestNum>
      Question Number: {questionNumber} / {totalQuestions}
    </StyledQuestNum>
    <StyledWrapper>
      <StyledQuestionWrapper>
        <Question questionText={question} />
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
