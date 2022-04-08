import React from "react";
//lottie-animation
import animationData from "../lotties/loader.json";
//styles
import { StyledLoaderWrapper, StyledLottie } from "./styles/Loader.style";

const Loader = () => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledLoaderWrapper>
      <StyledLottie {...defaultLottieOptions} />
      <p>loading questions...</p>
    </StyledLoaderWrapper>
  );
};

export default Loader;
