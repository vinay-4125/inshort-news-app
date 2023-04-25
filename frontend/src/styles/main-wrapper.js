import styled from "styled-components";

export const MainWrapper = styled.div`
  ${"" /* width: 81.5%; */}
  width: 80%;
  margin: auto;
  padding: 5rem;
  @media all and (max-width: 900px) {
    width: 100%;
    margin: auto;
    padding: 0rem;
    margin-top: 5rem;
  }
  @media (min-width: 900px) and (max-width: 1280px) {
    width: 100%;
  }
`;
