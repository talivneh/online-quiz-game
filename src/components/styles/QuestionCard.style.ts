import styled from "styled-components";
//mui-components
import { Card } from "@mui/material";

type AnswerWrapperProps = {
  correct: boolean;
  userClicked: boolean;
  disabled: boolean;
};

export const StyledCard = styled(Card)`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledQuestInfo = styled.div`
  flex-basis: 10%;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  flex-basis: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledQuestionWrapper = styled.div`
  flex-basis: 75%;
  display: flex;
  max-height: 50%;
  justify-content: center;
  align-items: center;
`;

export const StyledAnswersWrapper = styled.div`
  flex-basis: 27%;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledAnswerWrapper = styled.div<AnswerWrapperProps>`
  flex-grow: 1;
  flex-basis: 25%;
  button{
    border: 1px solid lightgoldenrodyellow;
    width: 100%;
    background-color: ${({ correct, userClicked, disabled }) =>
      correct
        ? "#8bc34a"
        : userClicked
        ? "#e53935"
        : disabled
        ? "gray"
        : "#553c9a"}};
}
`;
