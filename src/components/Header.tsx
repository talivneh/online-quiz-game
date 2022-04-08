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
  StyledHeadline,
} from "./styles/Header.style";

type Props = {
  gameOver: boolean;
  questions: QuestionState[];
  score: number;
  loading: boolean;
  timer: number;
  timeIsUp: boolean;
  userAnswered: boolean;
};

const Header = ({
  userAnswered,
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
      return (
        <Timer userAnswered={userAnswered} time={timer} timeIsUp={timeIsUp} />
      );
    }
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeadline>
        <h1>Quiz Game</h1>
        <span>By Tal Livneh</span>
      </StyledHeadline>
      <StyledHeaderInfoWrapper>
        {renderScore()}
        {renderClock()}
      </StyledHeaderInfoWrapper>
    </StyledHeaderWrapper>
  );
};

export default Header;
