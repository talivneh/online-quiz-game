import React from "react";
//mui-components
import { Typography, useTheme, Zoom } from "@mui/material";
//style
import { StyledButton } from "./styles/Answer.style";

type Props = {
  answer: string;
  disabled: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Answer = ({ answer, disabled, handleClick }: Props) => {
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${Math.random() * 400}ms`,
      }}
      unmountOnExit
    >
      <StyledButton
        style={{ textTransform: "none" }}
        disabled={disabled}
        value={answer}
        onClick={handleClick}
      >
        <Typography dangerouslySetInnerHTML={{ __html: answer }} />
      </StyledButton>
    </Zoom>
  );
};

export default Answer;
