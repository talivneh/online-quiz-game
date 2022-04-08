import styled from "styled-components";
//type
import { Difficulty } from "../../API";

type StyleProps = {
  difficulty: Difficulty;
};

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0 10px;
  }
`;

export const StyledDiffWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`;

const generalDiv = styled.div<StyleProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const EasyLight = styled(generalDiv)`
  background-color: ${({ difficulty }) =>
    difficulty === Difficulty.EASY ? "green" : "gray"};
}
`;

export const MediumLight = styled(generalDiv)`
  background-color: ${({ difficulty }) =>
    difficulty === Difficulty.MEDIUM ? "orange" : "gray"};
}
`;

export const HardLight = styled(generalDiv)`
  background-color: ${({ difficulty }) =>
    difficulty === Difficulty.HARD ? "red" : "gray"};
}
`;
