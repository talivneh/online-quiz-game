import React from "react";
//styles
import { StyledTimeIsUpMessage } from "./styles/Timer.style";

type Props = {
  time: string;
  timeIsUp: boolean;
};

const Timer = ({ time, timeIsUp }: Props) => {
  if (timeIsUp) {
    return <StyledTimeIsUpMessage>TIME IS UP!</StyledTimeIsUpMessage>;
  }
  return <div>{time}</div>;
};

export default Timer;
