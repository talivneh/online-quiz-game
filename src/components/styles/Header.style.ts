import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const StyledHeadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 50%;
  h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 0 #ff7f50, 4px 4px 0 #553c9a;
  }
`;

export const StyledHeaderInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-size: 25px;
  font-weight: 700;
`;
