import styled from "styled-components";
//lottie-animation
import Lottie from "lottie-react";

export const StyledTimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTimeIsUpMessage = styled.div`
  background-color: lightgray;
  color: black;
  font-weight: 600;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const StyledTimerIsOn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-end;
`;

export const StyledLottie = styled(Lottie)`
  width: 40px;
  height: 80px;
`;
