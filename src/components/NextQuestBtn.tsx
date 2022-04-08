import React from "react";
import styled from "styled-components";
//mi-component
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  width: 80%;
`;

type Props = {
  handleClick: () => void;
  btnText: string;
};

const NextQuestBtn = ({ handleClick, btnText }: Props) => {
  return (
    <StyledButton variant="outlined" onClick={handleClick}>
      {btnText}
    </StyledButton>
  );
};

export default NextQuestBtn;
