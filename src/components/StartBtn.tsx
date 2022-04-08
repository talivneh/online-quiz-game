import React from "react";
//mui-components
import { Tooltip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
//styles
import { StyledBtn } from "./styles/StartBtn.style";

type Props = {
  handleClick: () => void;
  disabled: boolean;
};

const StartBtn = ({ handleClick, disabled }: Props) => {
  const renderStartBtn = () => {
    return (
      <StyledBtn variant="contained" disabled={disabled} onClick={handleClick}>
        <StarIcon />
        start
        <StarIcon />
      </StyledBtn>
    );
  };

  if (disabled) {
    return (
      <Tooltip title="Please enter your name" arrow>
        <span>{renderStartBtn()}</span>
      </Tooltip>
    );
  } else {
    return renderStartBtn();
  }
};

export default StartBtn;
