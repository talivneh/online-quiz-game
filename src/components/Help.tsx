import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
//components
import { Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Filter2Icon from "@mui/icons-material/Filter2";
import Timer10SelectIcon from "@mui/icons-material/Timer10Select";

//style
import { StyleSpeedDial, StyledSpeedDialAction } from "./styles/Help.style";

//types
import { HelpType } from "../App";

type Props = {
  help: HelpType;
  setHelp: Dispatch<SetStateAction<HelpType>>;
  disabled: boolean;
  hasHint: boolean;
};

const Help = ({ help, setHelp, disabled, hasHint }: Props) => {
  const renderSpeedDial = () => {
    if (!disabled) {
      return (
        <StyleSpeedDial
          disabled={disabled}
          ariaLabel="SpeedDial"
          icon={<QuestionMarkIcon />}
          direction={"down"}
        >
          <StyledSpeedDialAction
            onClick={() => {
              if (!help.time) setHelp({ ...help, time: true });
            }}
            key={"time"}
            icon={<Timer10SelectIcon />}
            tooltipTitle={"get 10 more seconds"}
            tooltipPlacement={"right"}
          />
          {hasHint && (
            <StyledSpeedDialAction
              onClick={() => {
                if (!help.hint) setHelp({ ...help, hint: true });
              }}
              key={"hint"}
              icon={<Filter2Icon />}
              tooltipTitle={"remove 2 answers"}
              tooltipPlacement={"right"}
            />
          )}
        </StyleSpeedDial>
      );
    }
    return (
      <StyleSpeedDial
        disabled={disabled}
        ariaLabel="SpeedDial"
        icon={<QuestionMarkIcon />}
        direction={"down"}
      />
    );
  };

  return (
    <Box sx={{ position: "relative", height: 50 }}>{renderSpeedDial()}</Box>
  );
};

export default Help;
