import React, { useEffect, useState } from "react";
//mui-components
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
//styles
import { StyledScoreWrapper } from "./styles/Score.style";

type Props = {
  score: number;
};

const Score = ({ score }: Props) => {
  return (
    <StyledScoreWrapper>
      <EmojiEventsIcon />
      <p>Score: {score.toFixed()}</p>
    </StyledScoreWrapper>
  );
};

export default Score;
