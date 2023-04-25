import styled, { keyframes } from "styled-components";

export const NewsWrapper = styled.div`
  margin: 1rem;
  ${"" /* padding: 1rem; */}
`;

export const LoadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;
const FadeUp = keyframes`
    from {opacity: 0; transform: translateY(2rem)}
    to {opacity: 1; transform: translateY(0rem)}
`;
export const NewsContentWrapper = styled.div`
  animation-duration: 0.7s;
  animation-name: ${FadeUp};
  margin: auto;
  width: 70%;
  @media all and (max-width: 790px) {
    width: 100%;
  }
`;
export const PaginationWrapper = styled.div`
  animation-duration: 0.7s;
  animation-name: ${FadeUp};
  margin: auto;
  width: 35%;
  @media all and (max-width: 900px) {
    width: 40%;
  }
  @media (min-width: 780px) and (max-width: 790px) {
    width: 50%;
  }
  @media all and (max-width: 670px) {
    width: 60%;
  }
  @media (min-width: 200px) and (max-width: 540) {
    width: 75%;
  }
`;
