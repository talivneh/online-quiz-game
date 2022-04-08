import styled from "styled-components";
//mui-components
import { Button } from "@mui/material";

type AnswerProps = {
  disabled: boolean;
};

export const StyledButton = styled(Button)<AnswerProps>`
  flex-grow: 1;
  height: 100%;
  color: white !important;
  :hover {
    background-color: orange !important;
    color: black !important;
  }
}
`;
