import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //background-size: cover;
  //background-image: repeating-radial-gradient(farthest-side at 5px 5px,
  //#553c9a,
  //#ee4b2b,
  //#553c9a);
  background-image: url("../public/images/space-background.jpg") !important;
  background-size: contain !important;
`;

export const StyledWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 700px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

export const StyledBtnWrapper = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
