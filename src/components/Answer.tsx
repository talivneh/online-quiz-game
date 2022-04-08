import React from "react";
import styled from "styled-components";
//mui-components
import { Button, Typography, useTheme, Zoom } from "@mui/material";

const StyledButton = styled(Button)`
  flex-grow: 1;
  height: 100%;
  color: white !important;
  :hover {
    background-color: orange !important;
    color: black !important;
  }
`;

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
