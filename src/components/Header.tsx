import React from "react";
//types
import { QuestionState } from "../API";
//components
import Score from "./Score";
import Timer from "./Timer";
//styles
import {
  StyledHeaderWrapper,
  StyledHeaderInfoWrapper,
} from "./styles/Header.style";

type Props = {
  gameOver: boolean;
  questions: QuestionState[];
  score: number;
  loading: boolean;
  timer: number;
  timeIsUp: boolean;
};

const Header = ({
  gameOver,
  questions,
  score,
  loading,
  timer,
  timeIsUp,
}: Props) => {
  const renderScore = () => {
    if (!gameOver && questions.length) {
      return <Score score={score} />;
    }
  };

  const renderClock = () => {
    if (!gameOver && !loading) {
      return <Timer time={timer.toString()} timeIsUp={timeIsUp} />;
    }
  };

  return (
    <StyledHeaderWrapper>
      <h1>Quiz</h1>
      <StyledHeaderInfoWrapper>
        {renderScore()}
        {renderClock()}
      </StyledHeaderInfoWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
