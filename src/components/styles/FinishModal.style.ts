import styled from "styled-components";
//mui-components
import { Box, Modal } from "@mui/material";
//lottie-animation
import Lottie from "lottie-react";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled(Box)`
  width: 65%;
  height: 65%;
  background-color: floralwhite;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  position: relative;

  button {
    align-self: flex-end;
    margin: 2%;
  }
`;

export const StyledLottie = styled(Lottie)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledModalMessage = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledPlayerName = styled.p`
  font-size: 2rem;
  color: cornflowerblue;
`;

export const StyledScoreInfo = styled.p`
  font-size: 1.7rem;
`;

export const StyledFinalWord = styled.p`
  font-size: 1.5rem;
`;
