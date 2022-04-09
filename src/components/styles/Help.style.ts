import styled from "styled-components";
//components
import { SpeedDial, SpeedDialAction } from "@mui/material";

type StyleProps = {
  disabled: boolean;
};

export const StyleSpeedDial = styled(SpeedDial)<StyleProps>`
  button {
    background-color: ${({ disabled }) => (disabled ? "gray" : "")};
    cursor: ${({ disabled }) => (disabled ? "default" : "")};
    :hover {
      background-color: ${({ disabled }) => (disabled ? "gray" : "")};
    }
  }
`;

export const StyledSpeedDialAction = styled(SpeedDialAction)``;
