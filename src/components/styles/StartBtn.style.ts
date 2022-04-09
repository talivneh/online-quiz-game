import styled from "styled-components";
//mui-components
import Button from "@mui/material/Button";

export const StyledBtn = styled(Button)`
  height: 70px !important;
  font-size: 25px !important;
  background-color: #ee4b2b !important;
  :disabled {
    opacity: 0.5;
  }
  button {
    width: 50% !important;
  }
`;
