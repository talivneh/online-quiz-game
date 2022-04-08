import styled from "styled-components";
//mui-components
import { Card } from "@mui/material";

type AnswerWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const StyledCard = styled(Card)`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledQuestNum = styled.p`
  flex-basis: 10%;
`;

export const StyledWrapper = styled.div`
  flex-basis: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledQuestionWrapper = styled.div`
  flex-basis: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAnswersWrapper = styled.div`
  flex-basis: 30%;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledAnswerWrapper = styled.div<AnswerWrapperProps>`
  flex-grow: 1;
  flex-basis: 25%;
  button{
    width: 100%;
    background-color: ${({ correct, userClicked }) =>
      correct ? "#5bfc8b" : userClicked ? "#fc665b" : "#96bdff"}};}
`;
