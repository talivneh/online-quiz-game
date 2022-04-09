import styled from "styled-components";
//mui-components
import Button from "@mui/material/Button";

export const StyledBtn = styled(Button)`
  height: 70px !important;
  font-size: 25px !important;
  :enabled {
    background-color: #ee4b2b !important;
  }
  :disabled {
    background-color: white !important;
    opacity: 0.3 !important;
  }

  button {
    width: 50% !important;
  }
`;
