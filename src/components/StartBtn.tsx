import React from "react";
//mui-components
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";

type Props = {
  handleClick: () => void;
  disabled: boolean;
};

const StartBtn = ({ handleClick, disabled }: Props) => {
  if (disabled) {
    return (
      <Tooltip title="Please enter your name" arrow>
        <span>
          <Button variant="outlined" disabled>
            start
          </Button>
        </span>
      </Tooltip>
    );
  } else {
    return (
      <Button variant="outlined" onClick={handleClick}>
        start
      </Button>
    );
  }
};

export default StartBtn;
