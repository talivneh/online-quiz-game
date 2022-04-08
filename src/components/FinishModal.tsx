import React from "react";
//mui-components
import { Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//styles
import {
  StyledModal,
  StyledBox,
  StyledLottie,
  StyledModalMessage,
  StyledPlayerName,
  StyledScoreInfo,
  StyledFinalWord,
} from "./styles/FinishModal.style";
import animationData from "../lotties/confetti-with-fireworks.json";

type Props = {
  showModal: boolean;
  handleClose: () => void;
  score: number;
  name: string;
};

const FinishModal = ({ showModal, handleClose, score, name }: Props) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledModal open={showModal} onClose={handleClose}>
      <StyledBox>
        {score > 0 && <StyledLottie {...defaultLottieOptions} />}
        <Fab onClick={handleClose} size={"small"} color={"warning"}>
          <CloseIcon />
        </Fab>
        <StyledModalMessage>
          <h2>Game Over</h2>
          <StyledPlayerName>{name},</StyledPlayerName>
          <StyledScoreInfo>you scored {score.toFixed()} points</StyledScoreInfo>
          <StyledFinalWord>
            {score > 20
              ? "Great job!!!"
              : score > 0
              ? "Good job!"
              : "Maybe next time..."}
          </StyledFinalWord>
        </StyledModalMessage>
      </StyledBox>
    </StyledModal>
  );
};

export default FinishModal;
