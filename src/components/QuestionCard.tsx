import React, { Dispatch, SetStateAction } from "react";
//types
import { AnswerObject, Hint } from "../App";
//components
import Answer from "./Answer";
import Question from "./Question";
import Help from "./Help";
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
import { HelpType } from "../App";

type Props = {
  question: QuestionState;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
  help: HelpType;
  setHelp: Dispatch<SetStateAction<HelpType>>;
  hideAnswers: Hint;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
  help,
  setHelp,
  hideAnswers,
}) => (
  <StyledCard>
    <StyledQuestInfo>
      <DifficultyLight difficulty={question.difficulty} />
      <p>
        Question Number: {questionNumber} / {totalQuestions}
      </p>
      <Help
        help={help}
        setHelp={setHelp}
        disabled={!!userAnswer}
        hasHint={answers.length >= 4}
      />
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
            disabled={!!userAnswer || hideAnswers.answers.includes(answer)}
          >
            <Answer
              answer={answer}
              disabled={!!userAnswer || hideAnswers.answers.includes(answer)}
              handleClick={callback}
            />
          </StyledAnswerWrapper>
        ))}
      </StyledAnswersWrapper>
    </StyledWrapper>
  </StyledCard>
);

export default QuestionCard;
