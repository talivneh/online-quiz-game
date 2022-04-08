import React from "react";
//styles
import { StyledButton } from "./styles/NextQuestButton.style";

type Props = {
  handleClick: () => void;
  btnText: string;
};

const NextQuestBtn = ({ handleClick, btnText }: Props) => {
  return (
    <StyledButton variant="contained" onClick={handleClick}>
      {btnText}
    </StyledButton>
  );
};

export default NextQuestBtn;
