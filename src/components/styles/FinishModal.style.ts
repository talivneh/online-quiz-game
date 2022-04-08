import styled from "styled-components";
//mui-components
import { Box, Modal } from "@mui/material";
//lottie-animation
import Lottie from "lottie-react";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #553c9a;
  font-weight: 500;
`;

export const StyledBox = styled(Box)`
  width: 65%;
  max-width: 700px;
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
    background-color: #ee4b2b !important;
  }
`;

export const StyledLottie = styled(Lottie)`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledModalMessage = styled.div`
  display: flex;
  height: 90%;
  margin-top: -5%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-size: 3rem;
    color: #ee4b2b;
    margin: 0;
  }
`;

export const StyledPlayerName = styled.p`
  font-size: 3.2rem;
  margin: 0;
`;

export const StyledScoreInfo = styled.p`
  font-size: 2rem;
`;

export const StyledFinalWord = styled.p`
  font-size: 1.5rem;
`;
