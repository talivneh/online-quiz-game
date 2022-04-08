import React, { useEffect, useState } from "react";
//mui-components
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
//styles
import {
  StyledTimeIsUpMessage,
  StyledTimerIsOn,
  StyledLottie,
  StyledTimerWrapper,
} from "./styles/Timer.style";
import animationData from "../lotties/clock-time.json";

type Props = {
  time: number;
  timeIsUp: boolean;
  userAnswered: boolean;
};

const Timer = ({ time, timeIsUp, userAnswered }: Props) => {
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (time < 11 && !timeIsUp && !userAnswered) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  }, [time, timeIsUp, userAnswered]);

  const defaultLottieOptions = {
    loop: isPlay,
    autoplay: isPlay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const renderMessage = () => {
    if (timeIsUp)
      return (
        <StyledTimeIsUpMessage>
          TIME IS UP!
          <SentimentVeryDissatisfiedIcon />
        </StyledTimeIsUpMessage>
      );
    return (
      <StyledTimerIsOn>
        {time.toString()}
        <StyledLottie {...defaultLottieOptions} />
      </StyledTimerIsOn>
    );
  };

  return <StyledTimerWrapper>{renderMessage()}</StyledTimerWrapper>;
};

export default Timer;
