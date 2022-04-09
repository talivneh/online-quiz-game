import styled from "styled-components";
//components
import { SpeedDial, SpeedDialAction } from "@mui/material";

type StyleProps = {
  disabled: boolean;
};

export const StyleSpeedDial = styled(SpeedDial)<StyleProps>`
  button {
    width: 35px !important;
    height: 30px !important;
    background-color: ${({ disabled }) => (disabled ? "gray" : "#ff7f50")};
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    cursor: ${({ disabled }) => (disabled ? "default" : "")};
    :hover {
      background-color: ${({ disabled }) => (disabled ? "gray" : "#ff7f50")};
    }
  }
  svg {
    width: 15px !important;
    height: 15px !important;
    color: white;
  }
  div {
    margin: 0 !important;
    padding: 10px 0 0 0 !important;
  }
`;

export const StyledSpeedDialAction = styled(SpeedDialAction)<StyleProps>`
  button {
    background-color: ${({ disabled }) => (disabled ? "gray" : "")};
    cursor: ${({ disabled }) => (disabled ? "default" : "")};
    :hover {
      background-color: ${({ disabled }) => (disabled ? "gray" : "")};
    }
  }
`;
