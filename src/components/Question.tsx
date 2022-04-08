import React from "react";
import styled from "styled-components";

const StyledQuestText = styled.p`
  text-align: center;
  font-size: 25px;
  margin: 10%;
  font-weight: 600;
`;

type Props = {
  questionText: string;
};

const Question = ({ questionText }: Props) => {
  return <StyledQuestText dangerouslySetInnerHTML={{ __html: questionText }} />;
};

export default Question;
