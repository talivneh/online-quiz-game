import React from "react";
//type
import { Difficulty } from "../API";
//style
import {
  EasyLight,
  HardLight,
  MediumLight,
  StyledDiffWrapper,
  StyledWrapper,
} from "./styles/DifficultyLight.style";

type Props = {
  difficulty: Difficulty;
};

const DifficultyLight = ({ difficulty }: Props) => {
  return (
    <StyledWrapper>
      <p>difficulty</p>
      <StyledDiffWrapper>
        <EasyLight difficulty={difficulty} />
        <MediumLight difficulty={difficulty} />
        <HardLight difficulty={difficulty} />
      </StyledDiffWrapper>
    </StyledWrapper>
  );
};

export default DifficultyLight;
