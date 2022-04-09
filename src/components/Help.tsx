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
    const noHelpLeft = help.time && help.hint;
    if (!disabled && !noHelpLeft) {
      return (
        <StyleSpeedDial
          ariaLabel="SpeedDial"
          icon={<QuestionMarkIcon />}
          direction={"down"}
          disabled={disabled || noHelpLeft}
        >
          <StyledSpeedDialAction
            onClick={() => {
              if (!help.time) setHelp({ ...help, time: true });
            }}
            key={"time"}
            icon={<Timer10SelectIcon />}
            tooltipTitle={"get 10 more seconds"}
            tooltipPlacement={"right"}
            disabled={help.time}
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
              disabled={help.hint}
            />
          )}
        </StyleSpeedDial>
      );
    }
    return (
      <StyleSpeedDial
        disabled={disabled || noHelpLeft}
        ariaLabel="SpeedDial"
        icon={<QuestionMarkIcon />}
        direction={"down"}
      />
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: 50,
        width: 50,
        marginTop: 1,
        marginRight: -1,
      }}
    >
      {renderSpeedDial()}
    </Box>
  );
};

export default Help;
